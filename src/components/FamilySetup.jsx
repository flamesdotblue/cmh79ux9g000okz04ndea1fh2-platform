import { useState } from 'react';
import { User, Plus } from 'lucide-react';

const relationships = ['Self', 'Spouse', 'Child', 'Parent'];

export default function FamilySetup({ onContinue }) {
  const [members, setMembers] = useState([
    { id: 'me', name: 'You', relation: 'Self' },
  ]);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Spouse');

  const addMember = () => {
    if (!name) return;
    const id = `${relation}-${name}-${Math.random().toString(36).slice(2, 6)}`;
    setMembers((m) => [...m, { id, name, relation }]);
    setName('');
    setRelation('Spouse');
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-1" style={{ color: '#1A1F71' }}>Add Your Family</h3>
      <p className="text-slate-600 text-sm mb-4">Invite loved ones for shared wellness insights and compassionate care.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {members.map((m) => (
          <MemberCard key={m.id} name={m.name} relation={m.relation} />
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Member name"
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#1A1F71]"
        />
        <select
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#1A1F71]"
        >
          {relationships.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <button
          onClick={addMember}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: '#695DDC' }}
        >
          <Plus className="h-4 w-4" /> Add Member
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">You can invite via email later and manage permissions in Settings.</span>
        <button
          onClick={onContinue}
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: '#1A1F71' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function MemberCard({ name, relation }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-4 bg-white shadow-sm flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-[#E8E8E8] grid place-items-center">
        <User className="h-5 w-5" style={{ color: '#1A1F71' }} />
      </div>
      <div>
        <div className="text-sm font-medium" style={{ color: '#1A1F71' }}>{name}</div>
        <div className="text-xs text-slate-500">{relation}</div>
      </div>
    </div>
  );
}
