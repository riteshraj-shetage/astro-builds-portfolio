# GIT_GUIDE.md

## 🚀 Git Aliases Quick Reference

This guide outlines custom aliases designed to streamline your development workflow by combining multiple Git commands into single, logical actions.

---

### 📦 `git acp "message"`

**Purpose:** Add, Commit, and Push (Local → Remote)

**Definition:**

```bash
git add .
git commit -m "message"
git push origin <current-branch>
```

**Usage:**

```bash
git acp "Fix navbar bug"
```

- **Result:** Stages all changes, commits with your message, and pushes to your current remote branch.

---

### 🔄 `git align`

**Purpose:** Discard local changes and align branch with remote (Remote → Local)

**Definition:**

```bash
git fetch origin
git reset --hard origin/<current-branch>
```

**Usage:**

```bash
git align
```

- **Result:** Your local branch becomes identical to the remote. **Warning:** All uncommitted local changes are lost.

---

### 🧪 `git keep <file>`

**Purpose:** Stash experiments, reset to remote, then restore one specific file from the stash.

**Definition:**

```bash
git stash
git fetch origin
git reset --hard origin/<current-branch>
git checkout stash -- <file>
```

**Usage:**

```bash
git keep src/components/Navbar.tsx
```

- **Result:** Saves all local changes to a stash, resets your branch to match the remote, then brings back only the specified file from your stash.

---

### 📂 `git restore <file-or-folder>`

**Purpose:** Restore specific files/folders from a stash into your working directory (without committing).

**Definition:**

```bash
git checkout stash -- <file-or-folder>
```

**Usage:**

```bash
git restore src/components/Navbar.tsx
git restore src/pages/
```

- **Result:** Brings back specific files from your most recent stash. You still need to commit and push them manually.

---

## 🛠 Typical Workflows

### 1. Push Everything

```bash
git acp "Update homepage"
```

### 2. Discard Everything and Match Remote

```bash
git align
```

### 3. Experiment & Keep Only One File

```bash
git keep src/components/Navbar.tsx
git acp "Keep navbar tweak"
```

### 4. Experiment & Keep Multiple Items

```bash
git keep   # This stashes changes and resets the branch
git restore src/components/ src/pages/index.astro
git acp "Keep navbar + homepage tweaks"
```

---

## 📝 Summary Table

| Alias         | Direction      | Core Action                         |
| ------------- | -------------- | ----------------------------------- |
| **`acp`**     | Local → Remote | Add + Commit + Push                 |
| **`align`**   | Remote → Local | Hard reset to match Origin          |
| **`keep`**    | Hybrid         | Stash + Reset + Restore one file    |
| **`restore`** | Stash → Local  | Pull specific files back from stash |

---
