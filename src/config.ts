// Business details used across the site.
export const WHATSAPP_NUMBER = "254715493814";
export const CONTACT_EMAIL = "bookings@luxetransfers.co.ke";

/** E.164, used for tel: links. */
export const PHONE_NUMBER = "+254715493814";
/** Same number, formatted for display. */
export const PHONE_DISPLAY = "+254 715 493 814";

export const whatsappLink = (message: string): string =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject: string, body: string): string =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;
