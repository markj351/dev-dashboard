import { useEffect, useState } from 'react';
interface BatteryManager extends EventTarget {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    addEventListener(type: 'levelchange', listener: () => void): void;
  }  
function getOS() {
  const platform = navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'Windows';
  if (platform.includes('mac')) return 'macOS';
  if (platform.includes('linux')) return 'Linux';
  return 'Unknown';
}

function SystemAnalysis() {
  const [time, setTime] = useState(new Date());
  const [battery, setBattery] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Type assertion to tell TypeScript that getBattery *might* exist
const nav = navigator as Navigator & {
    getBattery?: () => Promise<BatteryManager>;
  };
  
  nav.getBattery?.().then(batteryStatus => {
    setBattery(Math.round(batteryStatus.level * 100));
    batteryStatus.addEventListener('levelchange', () => {
      setBattery(Math.round(batteryStatus.level * 100));
    });
  });
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2">System Analysis</h3>
      <p><strong>Time:</strong> {time.toLocaleTimeString()}</p>
      <p><strong>Browser:</strong> {navigator.userAgent.split(' ')[0]}</p>
      <p><strong>OS:</strong> {getOS()}</p>
      {battery !== null ? (
        <p><strong>Battery:</strong> {battery}%</p>
      ) : (
        <p className="text-gray-500"><em>Battery info not available</em></p>
      )}
    </div>
  );
}

export default SystemAnalysis;
