"use client";

import { useState } from "react";
import { Alert, Grid, MenuItem } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useI18n } from "@/components/provider/I18nProvider";
import FormField from "@/components/common/FormField";
import PrimaryButton from "@/components/common/PrimaryButton";
import { buildContactMailto } from "@/config/contact";

export default function ContactForm() {
  const { t } = useI18n();
  const c = t.contact;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.service.trim()) {
      setStatus("error");
      setErrorMsg(c.errorMsg);
      return;
    }

    setErrorMsg("");
    window.location.href = buildContactMailto(form);
    setStatus("success");
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <Grid container spacing={2.5}>
      {status === "success" && (
        <Grid size={{ xs: 12 }}>
          <Alert severity="success">{c.successMsg}</Alert>
        </Grid>
      )}
      {status === "error" && errorMsg && (
        <Grid size={{ xs: 12 }}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}

      <Grid size={{ xs: 12, sm: 6 }}>
        <FormField
          label={c.fields.name}
          name="name"
          value={form.name}
          onChange={onChange}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FormField
          label={c.fields.phone}
          name="phone"
          value={form.phone}
          onChange={onChange}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FormField
          label={c.fields.email}
          name="email"
          value={form.email}
          onChange={onChange}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FormField
          select
          label={c.fields.service}
          name="service"
          value={form.service}
          onChange={onChange}
        >
          {c.services.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </FormField>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <FormField
          multiline
          rows={4}
          label={c.fields.message}
          name="message"
          value={form.message}
          onChange={onChange}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <PrimaryButton
          fullWidth
          endIcon={<ArrowForwardIcon />}
          onClick={onSubmit}
        >
          {c.submitBtn}
        </PrimaryButton>
      </Grid>
    </Grid>
  );
}
