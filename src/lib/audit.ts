// Audit logging — records security-relevant events in D1

export type AuditAction =
  | "login_google"
  | "login_magic_link"
  | "magic_link_sent"
  | "magic_link_failed"
  | "magic_link_rate_limited"
  | "token_invalid"
  | "token_expired"
  | "signature_created"
  | "signature_updated"
  | "signature_deleted"
  | "plan_upgraded"
  | "plan_cancelled"
  | "checkout_created"
  | "webhook_received"
  | "webhook_invalid_signature";

export async function logAudit(
  db: D1Database,
  action: AuditAction,
  opts: {
    userId?: string;
    email?: string;
    detail?: string;
    ip?: string;
  } = {}
): Promise<void> {
  try {
    const id = crypto.randomUUID();
    await db
      .prepare(
        "INSERT INTO audit_log (id, user_id, email, action, detail, ip) VALUES (?, ?, ?, ?, ?, ?)"
      )
      .bind(
        id,
        opts.userId || null,
        opts.email || null,
        action,
        opts.detail || null,
        opts.ip || null
      )
      .run();
  } catch (err) {
    // Audit logging should never break the main flow
    console.error("Audit log error (non-fatal):", err);
  }
}
