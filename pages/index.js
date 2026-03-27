import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 直接跳转到你的 Notion，地址栏保持 giwin.cn
    window.location.replace("https://giwin.notion.site");
  }, []);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '18px'
    }}>
      正在打开 Giwin Space...
    </div>
  );
}
