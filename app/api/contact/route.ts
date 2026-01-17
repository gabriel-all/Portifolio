import { NextResponse } from "next/server"
import { Resend } from "resend"

console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)
console.log("[v0] CONTACT_EMAIL:", process.env.CONTACT_EMAIL)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    console.log("[v0] Recebendo requisição de contato:", { name, email, subject })

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    console.log("[v0] Tentando enviar e-mail para:", process.env.CONTACT_EMAIL)

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "gabrielandrade221b@gmail.com"],
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    console.log("[v0] E-mail enviado com sucesso:", data)

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Erro ao enviar e-mail:", error)
    return NextResponse.json(
      {
        error: "Erro ao enviar mensagem. Tente novamente.",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    )
  }
}
