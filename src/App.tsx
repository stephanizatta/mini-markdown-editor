import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleExport = () => {
    const htmlContent = marked(markdown);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown-export.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <textarea
        id="markdown-input"
        placeholder="Escreva seu Markdown aqui..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
      <button onClick={handleExport}>Exportar como HTML</button>
    </div>
  );
}

export default App;