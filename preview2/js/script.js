function gerarPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const objetivo = document.getElementById("objetivo").value;
      const formacao = document.getElementById("formacao").value;
      const experiencia = document.getElementById("experiencia").value;

      doc.setFontSize(18);
      doc.text("Currículo — Aprendiz+", 20, 20);

      doc.setFontSize(12);
      doc.text(`Nome: ${nome}`, 20, 40);
      doc.text(`Email: ${email}`, 20, 50);
      doc.text(`Telefone: ${telefone}`, 20, 60);

      doc.text("Objetivo Profissional:", 20, 75);
      doc.text(objetivo, 20, 85, { maxWidth: 170 });

      doc.text("Formação Acadêmica:", 20, 110);
      doc.text(formacao, 20, 120, { maxWidth: 170 });

      doc.text("Experiências:", 20, 145);
      doc.text(experiencia, 20, 155, { maxWidth: 170 });

      doc.save("curriculo-aprendiz+.pdf");
    }
