"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setStatus("idle"); // Réinitialiser le statut lors de la modification
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    // NOTE: C'est ici que la logique d'envoi à l'API sera implémentée.
    // Pour l'instant, nous simulons un délai d'envoi.

    try {
      // Simulation d'une requête API réussie après 2 secondes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Formulaire soumis:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Vider le formulaire
    } catch (error) {
      console.error("Erreur de soumission:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
    >
      {/* Statut de Soumission */}
      {status === "success" && (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
          role="alert"
        >
          <p className="font-bold">Message envoyé !</p>
          <p>Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      )}
      {status === "error" && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Erreur !</p>
          <p>
            Une erreur s&apos;est produite lors de l&apos;envoi. Veuillez
            réessayer plus tard.
          </p>
        </div>
      )}

      {/* Champ Nom */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nom Complet
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Champ Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Adresse Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Champ Sujet */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Sujet
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Champ Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Votre Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:border-primary focus:ring-primary"
        ></textarea>
      </div>

      {/* Bouton de Soumission */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center bg-primary text-white font-semibold py-3 px-4 rounded-md hover:bg-primary-dark transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Envoyer le Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
