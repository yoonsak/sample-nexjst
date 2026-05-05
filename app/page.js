export const dynamic = 'force-dynamic';
export default function Page() {
  const appName = process.env.APPNAME || "DefaultApp";
  const currentTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Bangkok', hour12: false })
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Hello World + {appName}</h1>
      <p>Current date/time: {currentTime}</p>
    </main>
  );
}