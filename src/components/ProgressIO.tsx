import { useRef } from 'react';
import { exportSnapshot, isValidSnapshot, useProgress } from '../store/progress';

export default function ProgressIO() {
  const fileRef = useRef<HTMLInputElement>(null);
  const importState = useProgress((s) => s.importState);

  const onExport = () => {
    const snapshot = exportSnapshot(useProgress.getState());
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    a.href = url;
    a.download = `chess-course-progress-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const onImportClick = () => fileRef.current?.click();

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-importing the same file
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!isValidSnapshot(data)) {
        alert('That file does not look like a valid progress export.');
        return;
      }
      if (!confirm('Importing will replace your current progress. Continue?')) return;
      importState(data);
      alert('Progress imported.');
    } catch {
      alert('Could not read that file.');
    }
  };

  return (
    <div className="flex gap-2 items-center text-sm">
      <button
        type="button"
        onClick={onExport}
        className="text-stone-700 hover:underline"
        title="Download your progress as a JSON file you can keep or move to another device."
      >
        Export
      </button>
      <span className="text-stone-300">·</span>
      <button type="button" onClick={onImportClick} className="text-stone-700 hover:underline">
        Import
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={onFileChange}
      />
    </div>
  );
}
