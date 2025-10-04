Here's a clear step-by-step guide for your situation. You’ve already:

- Worked on branch `dhiraj`, raised 2-3 PRs, and all have been merged into `main`.
- Now the developer working on `neeraj` branch has completed their work.
- Goal: Get **code from both branches (`dhiraj` and `neeraj`) into `main`** so that everyone can pull latest and proceed.

---

### ✅ Step-by-step Plan:

#### 1. **Verify that `dhiraj` work is already in `main`**

Since you've confirmed that all PRs from `dhiraj` are merged, you don’t need to do anything more with that branch.

---

#### 2. **Make sure `neeraj` branch is up to date with latest `main`**

Before merging `neeraj` to `main`, it's good practice to ensure it includes latest changes from `main`.

On Neeraj's local machine (or whoever is working on the `neeraj` branch):

```bash
# Switch to neeraj branch
git checkout neeraj

# Fetch the latest updates
git fetch origin

# Merge latest main into neeraj (to resolve any conflicts early)
git merge origin/main
```

> 🔍 If there are any merge conflicts, fix them now, test the code, and commit the merge resolution.

---

#### 3. **Push the updated `neeraj` branch (if any changes happened)**

```bash
git push origin neeraj
```

---

#### 4. **Create a Pull Request from `neeraj` → `main`**

- Go to GitHub / GitLab (whichever platform you're using).
- Open a **Pull Request** from `neeraj` branch into `main`.
- Wait for code review and approval.
- Once approved, **merge the PR into `main`**.

---

#### 5. **Everyone pulls the latest `main`**

Once the `neeraj` PR is merged into `main`, now both your changes (`dhiraj` and `neeraj`) are in `main`.

Now, everyone should do:

```bash
git checkout main
git pull origin main
```

If you want to continue working on your own branches, you can then update your branches too:

```bash
# Update dhiraj branch
git checkout dhiraj
git merge main

# Or rebase if preferred
# git rebase main
```

Same for `neeraj` if needed.

---

### ✅ Summary:

- ✅ Dhiraj's work already in `main`
- 🔄 Update `neeraj` branch with latest `main`
- 📦 Create and merge PR from `neeraj` → `main`
- 🔄 Everyone pulls latest `main` and continues work

Let me know if you want to squash commits, rebase, or handle conflicts in a specific way.
