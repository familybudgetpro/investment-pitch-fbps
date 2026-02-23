import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/30 selection:text-white relative">
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 italic">
            Terms of <span className="text-zinc-500">Service</span>
          </h1>
          
          <div className="space-y-8 text-zinc-400 font-medium leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">1. Acceptance of Terms</h2>
              <p>
                By accessing the SAIERA interface or any EndurxLabs automated services, you agree to be bound by these industrial-grade terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">2. Service Usage</h2>
              <p>
                Our AI-native systems are provided "as-is" for the purpose of high-frequency intelligence gathering and communication automation. Unauthorized attempts to decompile or reverse-engineer the Stark Protocol are strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">3. Account Integrity</h2>
              <p>
                Users are responsible for maintaining the security of their connected Meta accounts. EndurxLabs is not liable for unauthorized access resulting from compromised user credentials on external platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-4 font-mono text-emerald-500">4. Modifications</h2>
              <p>
                We reserve the right to upgrade, patch, or recalibrate these terms at any time. Continued usage of the HUD constitutes acceptance of the latest protocols.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
