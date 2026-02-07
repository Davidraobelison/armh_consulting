"use client";

export default function ContactUsForm() {
  return (
    <form className="space-y-4">
      {/* Nom */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Nom
        </label>
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full border border-gray-300 px-4 py-3 rounded
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Votre email"
          className="w-full border border-gray-300 px-4 py-3 rounded
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Votre message"
          className="w-full border border-gray-300 px-4 py-3 rounded
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        className="inline-block bg-black text-white px-6 py-3 rounded
                   hover:bg-gray-800 transition"
      >
        Envoyer
      </button>
    </form>
  );
}
