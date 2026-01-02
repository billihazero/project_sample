# Project Sample

프론트엔드(Next.js), MCP Server(Node.js)를 하나의 저장소에서 관리하는  
**pnpm 기반 모노레포 프로젝트 샘플**입니다.

---

## 📦 프로젝트 구조

```text
monorepo-template/
├─ apps/
│  ├─ frontend/        # Next.js 16
│  └─ mcp/             # Node.js
│
├─ package.json        # 루트 스크립트 관리
├─ pnpm-lock.yaml      # 의존성 락 파일
├─ pnpm-workspace.yaml
└─ README.md
```

---

## 🧰 사용 기술

- **Package Manager**: pnpm (workspace 사용)
- **Frontend**: Next.js
- **MCP Server**: Node.js

---

## 🚀 시작하기

### 1️⃣ pnpm 설치 (필수)

```bash
npm install -g pnpm
```

---

### 2️⃣ 의존성 설치 (루트에서 한 번만)

```bash
pnpm install
```

---

## ▶️ 주요 명령어 (루트 기준)

### 🔹 프론트엔드 + MCP 동시 실행

```bash
pnpm dev
```

- frontend: `apps/frontend`
- mcp: `apps/mcp`
