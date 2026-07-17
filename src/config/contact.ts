export const contactLinks = {
  phone: "081-5956897",
  phoneTel: "+66815956897",
  email: "pot@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61556976380918",
} as const;

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export function buildContactMailto(form: ContactFormData) {
  const subject = encodeURIComponent(
    `[Website] ${form.name.trim()} — ${form.service.trim()}`,
  );

  const bodyLines = [
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    form.email.trim() ? `Email: ${form.email.trim()}` : null,
    `Service: ${form.service.trim()}`,
    form.message.trim() ? `\nMessage:\n${form.message.trim()}` : null,
  ].filter(Boolean);

  const body = encodeURIComponent(bodyLines.join("\n"));

  return `mailto:${contactLinks.email}?subject=${subject}&body=${body}`;
}
