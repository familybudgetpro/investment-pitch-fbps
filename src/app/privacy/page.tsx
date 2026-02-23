import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/30 selection:text-white relative">
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 italic">
            Privacy <span className="text-zinc-500">Policy</span>
          </h1>
          
          <div className="space-y-8 text-zinc-400 font-medium leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">1. Data Ingestion</h2>
              <p>
                EndurxLabs operates AI-native systems that ingest data to provide high-frequency intelligence and optimization. 
                We ensure that all information processed through our ecosystems—including WhatsApp, Instagram, and web interfaces—is handled with industrial-grade encryption.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">2. Usage Protocols</h2>
              <p>
                Data is utilized strictly for executing user-requested commands, predictive modeling, and system refinement. 
                We do not sell user data to third-party entities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">3. External Handshakes</h2>
              <p>
                When connecting to external platforms like Meta (WhatsApp, Instagram), we adhere to their respective security 
                and privacy frameworks. Our conduits are designed for minimum data exposure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">4. System Termination</h2>
              <p>
                Users retain the right to request data deletion. Upon command, our systems will purge related records from 
                active memory and secondary storage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">5. Contact</h2>
              <p>
                For technical inquiries regarding data protocols, contact the lab at admin@endurxlabs.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
