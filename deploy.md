# สรุปการตั้งค่า Domain + Cloudflare + Vercel

เอกสารนี้สรุปขั้นตอนทั้งหมดตั้งแต่ซื้อ Domain ไปจนถึงเชื่อมต่อกับ Vercel ผ่าน Cloudflare พร้อมอธิบายหน้าที่ของแต่ละบริการ

---

# Architecture

```text
                User
                  │
                  ▼
      https://jirayu-nan.com
                  │
                  ▼
            Cloudflare
        (DNS + SSL + CDN)
                  │
                  ▼
              Vercel
      (Deploy Next.js App)
                  │
                  ▼
             Next.js Website
```

## หน้าที่ของแต่ละบริการ

| Service | หน้าที่ |
|----------|----------|
| HostingLotus | ผู้ให้บริการจดทะเบียน Domain (Registrar) |
| Cloudflare | DNS, SSL, CDN, Firewall และ Reverse Proxy |
| Vercel | Hosting สำหรับ Next.js |

---

# Step 1 : ซื้อ Domain

ซื้อ

```
jirayu-nan.com
```

จาก

```
HostingLotus
```

หลายคนเข้าใจผิดว่า

> ซื้อ Domain แล้วเว็บไซต์จะเปิดได้ทันที

จริง ๆ แล้วไม่ใช่

Domain เป็นเพียง

> ชื่อเว็บไซต์

เปรียบเหมือน

```
บ้านเลขที่
```

แต่ยังไม่มีข้อมูลว่า

บ้านเลขที่นี้อยู่ที่ไหน

จึงต้องมี DNS เพื่อบอกว่า Domain นี้ต้องชี้ไปหา Server ตัวไหน

---

# Step 2 : Deploy เว็บไซต์

Deploy โปรเจกต์ Next.js ขึ้น

```
Vercel
```

จะได้ URL ชั่วคราว เช่น

```
jirayu-construction-2.vercel.app
```

เว็บไซต์สามารถใช้งานได้แล้ว

แต่ยังไม่ได้ใช้ Domain ของเรา

---

# Step 3 : เพิ่ม Domain เข้า Vercel

นำ

```
jirayu-nan.com
```

ไปเพิ่มใน

```
Vercel
```

เมื่อเพิ่มเสร็จ

Vercel จะสร้าง DNS Records ที่ต้องใช้ เช่น

```
A Record
216.198.79.1
```

และ

```
CNAME
vercel-dns-017.com
```

ค่าพวกนี้

ไม่ได้คิดขึ้นเอง

แต่

**Vercel เป็นคนสร้างให้**

เพื่อบอกว่า

Domain นี้ต้องวิ่งมาหา Vercel

---

# Step 4 : ทำไมไม่ใช้ DNS ของ HostingLotus

จริง ๆ สามารถใช้ได้

```
HostingLotus DNS
        │
        ▼
     Vercel
```

แต่เราเลือกใช้

```
Cloudflare
```

แทน

เพราะได้ความสามารถเพิ่มขึ้นมาก

---

# Step 5 : Cloudflare คืออะไร

Cloudflare

ไม่ใช่ Hosting

ไม่ใช่ผู้ขาย Domain

Cloudflare คือ

> DNS Provider + Reverse Proxy

พร้อมความสามารถ

- DNS
- SSL ฟรี
- CDN
- Cache
- Firewall
- DDoS Protection
- Redirect Rules
- Analytics

ทั้งหมดนี้ใช้ฟรี

ดังนั้น

จากเดิม

```
HostingLotus DNS
        │
        ▼
     Vercel
```

จะกลายเป็น

```
Cloudflare
        │
        ▼
     Vercel
```

---

# Step 6 : เปลี่ยน Nameserver

ตอนแรก

HostingLotus

ใช้ Nameserver

```
domain....orderbox-dns.com
```

เมื่อเชื่อม Cloudflare

Cloudflare จะให้เปลี่ยนเป็น

```
ligia.ns.cloudflare.com

thaddeus.ns.cloudflare.com
```

เมื่อเปลี่ยนเสร็จ

หมายความว่า

HostingLotus

จะไม่ได้จัดการ DNS อีกต่อไป

Cloudflare จะเป็นคนจัดการทั้งหมด

จึงต้องรอประมาณ

```
1-24 ชั่วโมง
```

เพื่อให้ DNS กระจายทั่วโลก

---

# Step 7 : ตรวจสอบ Nameserver

ใช้

```
DNSChecker
```

ตรวจสอบ

```
NS
```

หากขึ้น

```
ligia.ns.cloudflare.com

thaddeus.ns.cloudflare.com
```

ทั่วโลก

แสดงว่า

Cloudflare รับหน้าที่ DNS แล้ว

---

# Step 8 : เพิ่ม DNS Records

สร้าง DNS Records ตามที่ Vercel แนะนำ

### Root Domain

```
Type : A

Name : @

Content : 216.198.79.1
```

### WWW

```
Type : CNAME

Name : www

Content : vercel-dns-017.com
```

เลข

```
216.198.79.1
```

มาจาก

```
Vercel
```

Cloudflare

มีหน้าที่เพียงเก็บ Record เหล่านี้

---

# Step 9 : Verify

รอจน

Cloudflare

ขึ้น

```
Active
```

และ

Vercel

ขึ้น

```
Valid Configuration
```

ถือว่าการเชื่อมต่อเสร็จสมบูรณ์

---

# ทำไมต้องเช็ค 2 ตัวใน Vercel

ต้องตรวจสอบ

```
jirayu-nan.com
```

และ

```
www.jirayu-nan.com
```

เพราะทั้งสองตัว

เป็นคนละ Hostname

เช่น

```
abc.com

www.abc.com

api.abc.com

blog.abc.com
```

ทั้งหมดคือคนละ Subdomain

จึงต้องให้ชี้ถูกทั้งคู่

---

# ทำไม Root ใช้ A Record

Root Domain

```
jirayu-nan.com
```

ใช้

```
A Record
```

เพราะ Root Domain

หลาย DNS Provider

ไม่สามารถใช้ CNAME ได้

จึงใช้

```
216.198.79.1
```

แทน

---

# ทำไม WWW ใช้ CNAME

```
www
```

เป็น Subdomain

จึงสามารถชี้ไปหา

```
vercel-dns-017.com
```

ได้

ดังนั้นจึงใช้

```
CNAME
```

---

# Proxy Detected คืออะไร

ใน Vercel จะเห็นข้อความ

```
Proxy Detected
```

สาเหตุคือ

ตอนนี้

```
User

↓

Cloudflare

↓

Vercel
```

ไม่ใช่

```
User

↓

Vercel
```

Cloudflare ทำหน้าที่เป็น Reverse Proxy

Vercel จึงแจ้งเตือนเฉย ๆ

ไม่ใช่ Error

---

# สถานะสุดท้าย

Cloudflare

✅ DNS

✅ SSL

✅ CDN

✅ Firewall

✅ Cache

✅ Reverse Proxy

Vercel

✅ Deploy

✅ Domain Connected

✅ HTTPS

HostingLotus

เหลือหน้าที่เพียง

```
เก็บ Domain
```

เท่านั้น

---

# Architecture สุดท้าย

```text
                User
                  │
                  ▼
      https://jirayu-nan.com
                  │
                  ▼
            Cloudflare
        (DNS + SSL + CDN)
                  │
                  ▼
              Vercel
      (Deploy Next.js App)
                  │
                  ▼
             Next.js Website
```

---

# สรุปสั้น ๆ

1. ซื้อ Domain จาก HostingLotus
2. Deploy เว็บไซต์ขึ้น Vercel
3. เพิ่ม Domain เข้า Vercel
4. นำค่าที่ Vercel ให้มาใช้สร้าง DNS Record
5. เพิ่ม Domain เข้า Cloudflare
6. เปลี่ยน Nameserver จาก HostingLotus ไป Cloudflare
7. สร้าง A Record และ CNAME ใน Cloudflare
8. รอ DNS Propagation
9. ตรวจสอบว่า Cloudflare Active
10. ตรวจสอบว่า Vercel ขึ้น Valid Configuration ทั้ง `jirayu-nan.com` และ `www.jirayu-nan.com`

เมื่อทุกอย่างเสร็จ

ผู้ใช้จะเข้ามาที่

```
User
    │
    ▼
Cloudflare
    │
    ▼
Vercel
    │
    ▼
Next.js
```

Cloudflare จะช่วยเรื่อง

- SSL
- CDN
- Cache
- Firewall
- DDoS Protection

ส่วน Vercel จะทำหน้าที่ Deploy และรันเว็บไซต์ Next.js