export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>Style Daddy | Something Went Wrong</title>

<style>
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

:root{
  --bg:#090909;
  --card:#111111;
  --border:#1f1f1f;
  --text:#ffffff;
  --muted:#9ca3af;
  --accent:#ef4444;
}

body{
  min-height:100vh;
  overflow:hidden;

  display:flex;
  align-items:center;
  justify-content:center;

  background:var(--bg);
  color:var(--text);

  font-family:
    Inter,
    system-ui,
    sans-serif;
}

.glow{
  position:absolute;
  width:700px;
  height:700px;

  border-radius:50%;

  background:
    radial-gradient(
      circle,
      rgba(239,68,68,.15),
      transparent 70%
    );

  filter:blur(80px);

  animation:float 8s ease-in-out infinite;
}

@keyframes float{
  0%,100%{
    transform:translateY(0);
  }
  50%{
    transform:translateY(-40px);
  }
}

.card{
  position:relative;
  z-index:10;

  width:min(90%,560px);

  background:rgba(17,17,17,.7);

  backdrop-filter:blur(20px);

  border:1px solid var(--border);

  border-radius:32px;

  padding:48px;

  text-align:center;

  box-shadow:
  0 20px 80px rgba(0,0,0,.4);
}

.logo{
  display:inline-flex;

  width:64px;
  height:64px;

  align-items:center;
  justify-content:center;

  background:var(--accent);

  border-radius:18px;

  font-weight:800;
  font-size:24px;

  margin-bottom:24px;
}

.code{
  font-size:14px;
  letter-spacing:4px;
  color:#f87171;
  text-transform:uppercase;
  margin-bottom:12px;
}

h1{
  font-size:42px;
  line-height:1.1;
  margin-bottom:16px;
}

p{
  color:var(--muted);
  line-height:1.7;
  margin-bottom:32px;
}

.actions{
  display:flex;
  gap:12px;
  justify-content:center;
  flex-wrap:wrap;
}

button,
a{
  border:none;
  outline:none;

  text-decoration:none;

  cursor:pointer;

  padding:14px 22px;

  border-radius:14px;

  font-weight:600;

  transition:.3s;
}

.primary{
  background:var(--accent);
  color:white;
}

.primary:hover{
  transform:translateY(-2px);
}

.secondary{
  background:transparent;
  color:white;
  border:1px solid #2a2a2a;
}

.secondary:hover{
  background:#181818;
}

.footer{
  margin-top:24px;
  font-size:13px;
  color:#6b7280;
}
</style>
</head>

<body>

<div class="glow"></div>

<div class="card">

<div class="logo">
SD
</div>

<div class="code">
Error
</div>

<h1>
This page didn't load
</h1>

<p>
Something went wrong while loading this page.
Try refreshing, return home, or come back in a few minutes.
</p>

<div class="actions">

<button
class="primary"
onclick="location.reload()"
>
Try Again
</button>

<a
class="secondary"
href="/"
>
Go Home
</a>

</div>

<div class="footer">
STYLE DADDY • PREMIUM STREETWEAR
</div>

</div>

</body>
</html>`;
}