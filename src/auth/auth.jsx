const USERS_KEY = "nexturn_users";
const SESSION_KEY = "nexturn_session";

export function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function signupUser({ role, name, email, password }) {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (!role || !normalizedEmail || !password) {
    return { ok: false, message: "Please fill all required fields." };
  }

  const exists = users.some((u) => u.email === normalizedEmail);
  if (exists) return { ok: false, message: "Email already registered." };

  users.push({
    id: crypto?.randomUUID?.() || String(Date.now()),
    role, // "student" | "admin"
    name: name?.trim() || "",
    email: normalizedEmail,
    password: String(password), // demo only
    createdAt: new Date().toISOString(),
  });

  saveUsers(users);
  return { ok: true };
}

export function loginUser({ email, password }) {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const user = users.find(
    (u) => u.email === normalizedEmail && u.password === String(password)
  );

  if (!user) return { ok: false, message: "Invalid email or password." };

  const session = {
    userId: user.id,
    role: user.role,
    email: user.email,
    name: user.name,
    loggedInAt: new Date().toISOString(),
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { ok: true, session };
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}