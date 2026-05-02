import React from "react";

type Props = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

export default function StatBadge({ value, label, icon }: Props) {
  return (
    <div className="flex items-center gap-3 px-6 py-3">
      <div className="shrink-0">{icon}</div>
      <div>
        <p className="text-2xl font-bold text-[#dce8e5eb]">{value}</p>
        <p className="text-xs text-[#dce8e5eb]/60 uppercase tracking-widest">{label}</p>
      </div>
    </div>
  );
}
