import { API_BASE_URL } from '@/lib/api';
import type { Invoice, CreateInvoicePayload } from '../types/invoice.types';

const API_URL = `${API_BASE_URL}/invoices`;

type InvoiceListResponse = {
    data: Invoice[];
    pagination: any;
};

type InvoiceResponse = {
    data: Invoice;
    message?: string;
};

const buildInvoiceUrl = (params?: Record<string, unknown>) => {
    const queryParams = new URLSearchParams();

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                queryParams.append(key, String(value));
            }
        });
    }

    const queryString = queryParams.toString();
    return queryString ? `${API_URL}?${queryString}` : API_URL;
};

const parseResponse = async <T>(response: Response, fallbackMessage: string): Promise<T> => {
    const data = await response.json().catch(() => null) as (T & { message?: string }) | null;

    if (!response.ok) {
        throw new Error(data?.message || fallbackMessage);
    }

    return data as T;
};

export const invoiceService = {
    // Get all invoices with filtering
    getInvoices: async (token: string, params?: Record<string, unknown>): Promise<InvoiceListResponse> => {
        const response = await fetch(buildInvoiceUrl(params), {
            headers: { Authorization: `Bearer ${token}` }
        });
        return parseResponse<InvoiceListResponse>(response, 'Failed to fetch invoices');
    },

    // Get single invoice
    getInvoiceById: async (token: string, id: string): Promise<Invoice> => {
        const response = await fetch(`${API_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await parseResponse<InvoiceResponse>(response, 'Failed to fetch invoice');
        return data.data;
    },

    // Create invoice
    createInvoice: async (token: string, data: CreateInvoicePayload): Promise<Invoice> => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await parseResponse<InvoiceResponse>(response, 'Failed to create invoice');
        return responseData.data;
    },

    // Update status
    updateStatus: async (token: string, id: string, status: string, paymentDetails?: any): Promise<Invoice> => {
        const response = await fetch(`${API_URL}/${id}/status`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status, paymentDetails })
        });
        const data = await parseResponse<InvoiceResponse>(response, 'Failed to update invoice status');
        return data.data;
    }
};
