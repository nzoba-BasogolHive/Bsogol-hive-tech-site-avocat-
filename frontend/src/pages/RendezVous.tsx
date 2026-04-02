export default function RendezVous() {
  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6">Prendre un rendez-vous sécurisé</h2>
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 max-w-lg">
        <input type="date" className="w-full mb-4 p-3 rounded bg-black/40" />
        <input type="time" className="w-full mb-4 p-3 rounded bg-black/40" />
        <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">Confirmer</button>
      </div>
    </div>
  );
}