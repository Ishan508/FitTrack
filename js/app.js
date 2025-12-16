/* --- DATA --- */
const EXERCISES = [
    // Chest
    { id: 'e1', name: 'Bench Press', muscle: 'Chest', type: 'Strength' },
    { id: 'e2', name: 'Push Ups', muscle: 'Chest', type: 'Strength' },
    { id: 'e3', name: 'Incline Dumbbell Press', muscle: 'Chest', type: 'Strength' },
    { id: 'e4', name: 'Chest Fly', muscle: 'Chest', type: 'Strength' },
    { id: 'e5', name: 'Cable Fly', muscle: 'Chest', type: 'Strength' },


    // Back
    { id: 'e5', name: 'Pull Ups', muscle: 'Back', type: 'Strength' },
    { id: 'e6', name: 'Lat Pulldown', muscle: 'Back', type: 'Strength' },
    { id: 'e7', name: 'Deadlift', muscle: 'Back', type: 'Strength' },
    { id: 'e8', name: 'Bent Over Row', muscle: 'Back', type: 'Strength' },
     { id: 'e9', name: 'T-bar', muscle: 'Back', type: 'Strength' },

    // Legs
    { id: 'e9', name: 'Squat', muscle: 'Legs', type: 'Strength' },
    { id: 'e10', name: 'Leg Press', muscle: 'Legs', type: 'Strength' },
    { id: 'e11', name: 'Lunges', muscle: 'Legs', type: 'Strength' },
    { id: 'e12', name: 'Leg Extension', muscle: 'Legs', type: 'Strength' },

    // Shoulders
    { id: 'e13', name: 'Overhead Press', muscle: 'Shoulders', type: 'Strength' },
    { id: 'e14', name: 'Lateral Raise', muscle: 'Shoulders', type: 'Strength' },
    { id: 'e15', name: 'Face Pull', muscle: 'Shoulders', type: 'Strength' },

    // Arms
    { id: 'e16', name: 'Bicep Curl', muscle: 'Arms', type: 'Strength' },
    { id: 'e17', name: 'Tricep Extension', muscle: 'Arms', type: 'Strength' },
    { id: 'e18', name: 'Hammer Curl', muscle: 'Arms', type: 'Strength' },

    // Abs
    { id: 'e19', name: 'Plank', muscle: 'Abs', type: 'Strength' },
    { id: 'e20', name: 'Crunches', muscle: 'Abs', type: 'Strength' },
    { id: 'e21', name: 'Leg Raise', muscle: 'Abs', type: 'Strength' },

    // Cardio
    { id: 'e22', name: 'Running', muscle: 'Cardio', type: 'Cardio' },
    { id: 'e23', name: 'Cycling', muscle: 'Cardio', type: 'Cardio' },
    { id: 'e24', name: 'Treadmill', muscle: 'Cardio', type: 'Cardio' },
    { id: 'e25', name: 'Walking', muscle: 'Cardio', type: 'Cardio' },
    { id: 'e26', name: 'Skipping', muscle: 'Cardio', type: 'Cardio' }
];

const FOODS = [
    { id: 'f1', name: 'Egg (1 large)', calories: 70, protein: 6, carbs: 0.6, fat: 5, unit: 'piece' },
    { id: 'f2', name: 'Chicken Breast (100g)', calories: 165, protein: 31, carbs: 0, fat: 3.6, unit: '100g' },
    { id: 'f3', name: 'Rice (Cooked, 100g)', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, unit: '100g' },
    { id: 'f4', name: 'Roti (1 medium)', calories: 100, protein: 3, carbs: 18, fat: 2, unit: 'piece' },
    { id: 'f5', name: 'Dal (Cooked, 1 bowl)', calories: 150, protein: 8, carbs: 20, fat: 4, unit: 'bowl' },
    { id: 'f6', name: 'Paneer (100g)', calories: 265, protein: 18, carbs: 1.2, fat: 20, unit: '100g' },
    { id: 'f7', name: 'Oats (Raw, 50g)', calories: 190, protein: 8, carbs: 33, fat: 3, unit: '50g' },
    { id: 'f8', name: 'Banana (1 medium)', calories: 105, protein: 1.3, carbs: 27, fat: 0.3, unit: 'piece' },
    { id: 'f9', name: 'Milk (250ml)', calories: 150, protein: 8, carbs: 12, fat: 8, unit: 'glass' },
    { id: 'f10', name: 'Curd/Yogurt (100g)', calories: 60, protein: 3.5, carbs: 4.7, fat: 3.3, unit: '100g' },
    { id: 'f11', name: 'Whey Protein (1 scoop)', calories: 120, protein: 24, carbs: 3, fat: 1, unit: 'scoop' },
    { id: 'f12', name: 'Almonds (10)', calories: 70, protein: 2.5, carbs: 2.5, fat: 6, unit: '10 pcs' },
    { id: 'f13', name: 'Peanut Butter (1 tbsp)', calories: 95, protein: 4, carbs: 3, fat: 8, unit: 'tbsp' }
];

/* --- FIREBASE CONFIGURATION --- */
// REPLACE THIS WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyBT2AiPOG--4rqLS2NhMpaoXBxz_lCIhlg",
    authDomain: "fittrack-pro-39472.firebaseapp.com",
    databaseURL: "https://fittrack-pro-39472-default-rtdb.firebaseio.com",
    projectId: "fittrack-pro-39472",
    storageBucket: "fittrack-pro-39472.firebasestorage.app",
    messagingSenderId: "100894476922",
    appId: "1:100894476922:web:ee40878358ee247b5c89c3",
    measurementId: "G-S5JF11ZQB0"
};

// Initialize Firebase
let db;
let auth;
let userUid = null;

try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();

    // Enable offline persistence
    db.enablePersistence().catch((err) => {
        if (err.code == 'failed-precondition') {
            console.log('Persistence failed: Multiple tabs open');
        } else if (err.code == 'unimplemented') {
            console.log('Persistence not supported by browser');
        }
    });

} catch (e) {
    console.error("Firebase not initialized. Make sure to update firebaseConfig.", e);
}

const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};

/* --- STORE (Firebase Adapter) --- */
const Store = {
    // We use listeners now, so 'get' is less common, but we'll keep structure
    // Subscribes to a collection for a specific date
    subscribeToWorkouts: (date, callback) => {
        if (!userUid || !db) return () => { };

        return db.collection('users').doc(userUid).collection('workouts')
            .where('date', '==', date)
            .onSnapshot((snapshot) => {
                const workouts = [];
                snapshot.forEach(doc => {
                    workouts.push({ id: doc.id, ...doc.data() });
                });
                callback(workouts);
            });
    },

    addWorkout: (workout) => {
        if (!userUid || !db) return;
        db.collection('users').doc(userUid).collection('workouts').add(workout);
    },

    deleteWorkout: (id) => {
        if (!userUid || !db) return;
        db.collection('users').doc(userUid).collection('workouts').doc(id).delete();
    },

    subscribeToMeals: (date, callback) => {
        if (!userUid || !db) return () => { };

        return db.collection('users').doc(userUid).collection('meals')
            .where('date', '==', date)
            .onSnapshot((snapshot) => {
                const meals = [];
                snapshot.forEach(doc => {
                    meals.push({ id: doc.id, ...doc.data() });
                });
                callback(meals);
            });
    },

    addMeal: (meal) => {
        if (!userUid || !db) return;
        db.collection('users').doc(userUid).collection('meals').add(meal);
    },

    deleteMeal: (id) => {
        if (!userUid || !db) return;
        db.collection('users').doc(userUid).collection('meals').doc(id).delete();
    },

    // Targets are stored in the user document itself
    subscribeToTargets: (callback) => {
        if (!userUid || !db) return () => { };

        return db.collection('users').doc(userUid).onSnapshot((doc) => {
            if (doc.exists && doc.data().targets) {
                callback(doc.data().targets);
            } else {
                // Default targets
                callback({
                    calories: 2500,
                    protein: 150,
                    carbs: 300,
                    fat: 80
                });
            }
        });
    },

    saveTargets: (targets) => {
        if (!userUid || !db) return;
        db.collection('users').doc(userUid).set({ targets }, { merge: true });
    }
};

/* --- MAIN APP LOGIC --- */

// State
let currentDate = getTodayDate();
let currentView = 'dashboard';
let unsubscribeWorkouts = null;
let unsubscribeMeals = null;
let unsubscribeTargets = null;

// Local Cache for rendering
let cachedWorkouts = [];
let cachedMeals = [];
let cachedTargets = { calories: 2500, protein: 150, carbs: 300, fat: 80 };

// DOM Elements
const mainContent = document.getElementById('main-content');
const dateDisplay = document.getElementById('current-date');
const navItems = document.querySelectorAll('.nav-item');
const modalContainer = document.getElementById('modal-container');
const modalContent = document.querySelector('.modal-content');
const modalBackdrop = document.querySelector('.modal-backdrop');

// --- Initialization ---
function init() {
    setupEventListeners();
    updateDateDisplay();

    // Auth Listener
    if (auth) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                userUid = user.uid;
                console.log("User signed in:", userUid);
                setupRealtimeListeners(); // Start listening to data

                // If we were on login view, switch to dashboard
                if (currentView === 'login') {
                    switchView('dashboard');
                } else {
                    renderView(currentView);
                }
            } else {
                console.log("No user signed in.");
                userUid = null;
                renderView('login');
            }
        });
    } else {
        mainContent.innerHTML = `<div style="padding: 20px; text-align: center;">
            <h2>Configuration Needed</h2>
            <p>Please open <code>js/app.js</code> and paste your Firebase Config.</p>
        </div>`;
    }
}

function setupRealtimeListeners() {
    // Unsubscribe previous listeners if any
    if (unsubscribeWorkouts) unsubscribeWorkouts();
    if (unsubscribeMeals) unsubscribeMeals();
    if (unsubscribeTargets) unsubscribeTargets();

    // Subscribe to new date
    unsubscribeWorkouts = Store.subscribeToWorkouts(currentDate, (workouts) => {
        cachedWorkouts = workouts;
        if (currentView !== 'login') renderView(currentView);
    });

    unsubscribeMeals = Store.subscribeToMeals(currentDate, (meals) => {
        cachedMeals = meals;
        if (currentView !== 'login') renderView(currentView);
    });

    unsubscribeTargets = Store.subscribeToTargets((targets) => {
        cachedTargets = targets;
        if (currentView !== 'login') renderView(currentView);
    });
}

function setupEventListeners() {
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            switchView(view);
        });
    });

    // Modal Close
    modalBackdrop.addEventListener('click', closeModal);

    // Global Click Delegation
    document.addEventListener('click', (e) => {
        const target = e.target;

        // Delete Workout
        const deleteWorkoutBtn = target.closest('.btn-delete-workout');
        if (deleteWorkoutBtn) {
            const id = deleteWorkoutBtn.dataset.id;
            if (confirm('Delete this set?')) {
                Store.deleteWorkout(id);
            }
            return;
        }

        // Delete Meal
        const deleteMealBtn = target.closest('.btn-delete-meal');
        if (deleteMealBtn) {
            const id = deleteMealBtn.dataset.id;
            if (confirm('Delete this meal?')) {
                Store.deleteMeal(id);
            }
            return;
        }

        // Open Add Workout Modal
        if (target.closest('#btn-add-workout')) {
            openAddWorkoutModal();
            return;
        }

        // Open Add Meal Modal
        if (target.closest('#btn-add-meal')) {
            openAddMealModal();
            return;
        }

        // Quick Actions from Dashboard
        if (target.closest('.action-nav-workout')) {
            switchView('workout');
            return;
        }
        if (target.closest('.action-nav-nutrition')) {
            switchView('nutrition');
            return;
        }

        // Login Page Actions
        if (target.closest('#btn-login-google')) {
            signInWithGoogle();
            return;
        }
        if (target.closest('#btn-login-guest')) {
            auth.signInAnonymously();
            return;
        }
    });

    // Global Form Submission Delegation
    document.addEventListener('submit', (e) => {
        if (e.target.id === 'add-workout-form') {
            e.preventDefault();
            handleWorkoutSubmit();
        }
        if (e.target.id === 'add-meal-form') {
            e.preventDefault();
            handleMealSubmit();
        }
    });
}

function updateDateDisplay() {
    const d = new Date(currentDate);
    dateDisplay.textContent = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function switchView(view) {
    currentView = view;

    // Update Nav
    navItems.forEach(item => {
        if (item.dataset.view === view) item.classList.add('active');
        else item.classList.remove('active');
    });

    // Toggle Nav Bar visibility
    const navBar = document.querySelector('.bottom-nav');
    if (view === 'login') {
        navBar.style.display = 'none';
        document.querySelector('.app-header').style.display = 'none';
    } else {
        navBar.style.display = 'flex';
        document.querySelector('.app-header').style.display = 'flex';
    }

    renderView(view);
}

// --- Rendering Views ---

function renderView(view) {
    mainContent.innerHTML = ''; // Clear current content

    switch (view) {
        case 'login':
            renderLogin();
            break;
        case 'dashboard':
            renderDashboard();
            break;
        case 'workout':
            renderWorkoutLog();
            break;
        case 'nutrition':
            renderNutritionLog();
            break;
        case 'history':
            renderHistory();
            break;
    }
}

// 0. Login / Landing Page
function renderLogin() {
    // Hide nav and header specifically for this logic is handled in switchView,
    // but we ensure clean verify here if needed.
    const html = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 80vh; text-align: center;">
            <div style="background: rgba(0, 230, 118, 0.1); padding: 24px; border-radius: 50%; margin-bottom: 24px;">
                <i class="ph-fill ph-barbell" style="font-size: 64px; color: var(--primary);"></i>
            </div>
            <h1 style="font-size: 32px; margin-bottom: 8px;">FitTrack Pro</h1>
            <p style="color: var(--text-secondary); margin-bottom: 48px; max-width: 280px;">
                Your personal minimalistic fitness and nutrition companion.
            </p>

            <div style="width: 100%; max-width: 300px; display: flex; flex-direction: column; gap: 16px;">
                <button id="btn-login-google" class="btn" style="background: white; color: black; position: relative;">
                    <i class="ph-bold ph-google-logo" style="position: absolute; left: 16px;"></i>
                    Sign In with Google
                </button>
                <button id="btn-login-guest" class="btn btn-secondary">
                    Continue as Guest
                </button>
            </div>

            <p style="margin-top: 24px; font-size: 12px; color: var(--text-secondary);">
                Multi-user supported. Your data is private.
            </p>
        </div>
    `;
    mainContent.innerHTML = html;

    // Ensure Nav is Hidden (Redundant safety)
    document.querySelector('.bottom-nav').style.display = 'none';
    document.querySelector('.app-header').style.display = 'none';
}

// Helper to calculate summary from cached data
function getDailySummary() {
    const summary = { calories: 0, protein: 0, carbs: 0, fat: 0 };
    cachedMeals.forEach(m => {
        summary.calories += m.calories;
        summary.protein += m.protein;
        summary.carbs += m.carbs;
        summary.fat += m.fat;
    });
    return {
        calories: Math.round(summary.calories),
        protein: Math.round(summary.protein),
        carbs: Math.round(summary.carbs),
        fat: Math.round(summary.fat)
    };
}

// Auth Actions
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // Link existing anonymous account to Google credential
    if (auth.currentUser && auth.currentUser.isAnonymous) {
        auth.currentUser.linkWithPopup(provider).then((result) => {
            console.log("Account linked", result.user);
            renderView(currentView); // Refresh UI
        }).catch((error) => {
            console.error("Error linking:", error);
            // If account already exists, standard sign-in
            if (error.code === 'auth/credential-already-in-use') {
                firebase.auth().signInWithCredential(error.credential);
            }
        });
    } else {
        auth.signInWithPopup(provider);
    }
}

function signOutUser() {
    auth.signOut();
}

// 1. Dashboard
function renderDashboard() {
    const summary = getDailySummary();
    const targets = cachedTargets;
    const workoutDone = cachedWorkouts.length > 0;
    const user = auth.currentUser;
    const isAnon = user && user.isAnonymous;

    const html = `
        <div class="dashboard-header" style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <h1>Hello, Athlete</h1>
                <p style="color: var(--text-secondary);">Here is your daily summary.</p>
            </div>
            ${isAnon ?
            `<button onclick="window.dispatchEvent(new CustomEvent('auth-login'))" style="background: var(--bg-card); border: 1px solid var(--primary); color: var(--primary); padding: 8px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; cursor: pointer;">
                    <i class="ph ph-google-logo"></i> Sync Data
                </button>` :
            `<div style="width: 32px; height: 32px; background: var(--primary); color: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer;" onclick="if(confirm('Sign out?')) window.dispatchEvent(new CustomEvent('auth-logout'))">
                    ${user.displayName ? user.displayName[0] : 'A'}
                </div>`
        }
        </div>

        <!-- Workout Status -->
        <div class="card" style="border-left: 4px solid ${workoutDone ? 'var(--success)' : 'var(--text-secondary)'}">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3>Workout Status</h3>
                    <p style="font-size: 18px; font-weight: 600; color: ${workoutDone ? 'var(--success)' : 'var(--text-secondary)'}">
                        ${workoutDone ? 'Completed' : 'Not Started'}
                    </p>
                </div>
                <div style="background: ${workoutDone ? 'rgba(0, 230, 118, 0.1)' : 'rgba(255, 255, 255, 0.1)'}; padding: 10px; border-radius: 50%;">
                    <i class="ph-fill ph-barbell" style="font-size: 24px; color: ${workoutDone ? 'var(--success)' : 'var(--text-secondary)'}"></i>
                </div>
            </div>
        </div>

        <!-- Nutrition Summary -->
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3>Nutrition</h3>
                <span style="font-size: 12px; color: var(--text-secondary);">${summary.calories} / ${targets.calories} kcal</span>
            </div>
            
            <!-- Calories -->
            <div style="margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
                    <span>Calories</span>
                    <span>${Math.round((summary.calories / targets.calories) * 100)}%</span>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${Math.min((summary.calories / targets.calories) * 100, 100)}%"></div>
                </div>
            </div>

            <!-- Macros Grid -->
            <div class="stat-grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 16px;">
                <div style="text-align: center;">
                    <div style="font-size: 14px; font-weight: 600; color: var(--accent);">${summary.protein}g</div>
                    <div style="font-size: 10px; color: var(--text-secondary);">Protein</div>
                    <div class="progress-container" style="height: 4px; margin-top: 4px;">
                        <div class="progress-bar blue" style="width: ${Math.min((summary.protein / targets.protein) * 100, 100)}%"></div>
                    </div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 14px; font-weight: 600; color: var(--warning);">${summary.carbs}g</div>
                    <div style="font-size: 10px; color: var(--text-secondary);">Carbs</div>
                    <div class="progress-container" style="height: 4px; margin-top: 4px;">
                        <div class="progress-bar orange" style="width: ${Math.min((summary.carbs / targets.carbs) * 100, 100)}%"></div>
                    </div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 14px; font-weight: 600; color: var(--danger);">${summary.fat}g</div>
                    <div style="font-size: 10px; color: var(--text-secondary);">Fats</div>
                    <div class="progress-container" style="height: 4px; margin-top: 4px;">
                        <div class="progress-bar red" style="width: ${Math.min((summary.fat / targets.fat) * 100, 100)}%"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px;">
            <button class="btn btn-primary action-nav-workout">
                <i class="ph ph-plus"></i> Workout
            </button>
            <button class="btn btn-secondary action-nav-nutrition">
                <i class="ph ph-plus"></i> Meal
            </button>
        </div>
    `;

    mainContent.innerHTML = html;

    // Bind Auth Events
    window.addEventListener('auth-login', signInWithGoogle, { once: true });
    window.addEventListener('auth-logout', signOutUser, { once: true });
}

// 2. Workout Log
function renderWorkoutLog() {
    const workouts = cachedWorkouts;

    const html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
            <h1>Workout Log</h1>
            <button id="btn-add-workout" class="btn btn-primary" style="width: auto; padding: 8px 16px; font-size: 14px;">
                <i class="ph ph-plus"></i> Add
            </button>
        </div>

        <div id="workout-list">
            ${workouts.length === 0 ? '<p style="text-align: center; color: var(--text-secondary); margin-top: 40px;">No workouts logged today.</p>' : ''}
            ${workouts.map(w => `
                <div class="list-item">
                    <div class="list-item-content">
                        <h4>${w.name}</h4>
                        <p>${w.sets} sets x ${w.reps} reps @ ${w.weight}kg</p>
                    </div>
                    <button class="btn-icon btn-delete-workout" data-id="${w.id}" style="color: var(--danger);">
                        <i class="ph ph-trash"></i>
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    mainContent.innerHTML = html;
}

function openAddWorkoutModal() {
    const html = `
        <h2 style="margin-bottom: 16px;">Log Exercise</h2>
        <form id="add-workout-form">
            <div class="input-group">
                <label>Exercise</label>
                <select id="input-exercise" required>
                    ${EXERCISES.map(e => `<option value="${e.name}">${e.name} (${e.muscle})</option>`).join('')}
                </select>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                <div class="input-group">
                    <label>Sets</label>
                    <input type="number" id="input-sets" value="3" required>
                </div>
                <div class="input-group">
                    <label>Reps</label>
                    <input type="number" id="input-reps" value="10" required>
                </div>
                <div class="input-group">
                    <label>Weight (kg)</label>
                    <input type="number" id="input-weight" value="0">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 16px;">Save Log</button>
        </form>
    `;
    openModal(html);
}

function handleWorkoutSubmit() {
    const workout = {
        date: currentDate,
        name: document.getElementById('input-exercise').value,
        sets: Number(document.getElementById('input-sets').value),
        reps: Number(document.getElementById('input-reps').value),
        weight: Number(document.getElementById('input-weight').value),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    Store.addWorkout(workout);
    closeModal();
    // No need to render, listener handles it
}

// 3. Nutrition Log
function renderNutritionLog() {
    const meals = cachedMeals;
    const summary = getDailySummary();

    const html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
            <h1>Nutrition Log</h1>
            <button id="btn-add-meal" class="btn btn-primary" style="width: auto; padding: 8px 16px; font-size: 14px;">
                <i class="ph ph-plus"></i> Add
            </button>
        </div>

        <div class="card" style="background: var(--bg-input); padding: 12px;">
            <div style="display: flex; justify-content: space-around; text-align: center;">
                <div>
                    <div style="font-weight: 700; color: var(--text-primary);">${summary.calories}</div>
                    <div style="font-size: 10px; color: var(--text-secondary);">Kcal</div>
                </div>
                <div>
                    <div style="font-weight: 700; color: var(--accent);">${summary.protein}g</div>
                    <div style="font-size: 10px; color: var(--text-secondary);">Pro</div>
                </div>
                <div>
                    <div style="font-weight: 700; color: var(--warning);">${summary.carbs}g</div>
                    <div style="font-size: 10px; color: var(--text-secondary);">Carb</div>
                </div>
                <div>
                    <div style="font-weight: 700; color: var(--danger);">${summary.fat}g</div>
                    <div style="font-size: 10px; color: var(--text-secondary);">Fat</div>
                </div>
            </div>
        </div>

        <div id="meal-list">
            ${meals.length === 0 ? '<p style="text-align: center; color: var(--text-secondary); margin-top: 40px;">No meals logged today.</p>' : ''}
            ${meals.map(m => `
                <div class="list-item">
                    <div class="list-item-content">
                        <h4>${m.name}</h4>
                        <p>${m.quantity} x ${m.unit} • ${Math.round(m.calories)} kcal</p>
                    </div>
                    <button class="btn-icon btn-delete-meal" data-id="${m.id}" style="color: var(--danger);">
                        <i class="ph ph-trash"></i>
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    mainContent.innerHTML = html;
}

function openAddMealModal() {
    const html = `
        <h2 style="margin-bottom: 16px;">Log Food</h2>
        <form id="add-meal-form">
            <div class="input-group">
                <label>Food Item</label>
                <select id="input-food" required>
                    ${FOODS.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}
                </select>
            </div>
            <div class="input-group">
                <label>Quantity (multiplier)</label>
                <input type="number" id="input-quantity" value="1" step="0.5" required>
                <small style="color: var(--text-secondary);">1 = 1 serving/unit as listed</small>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 16px;">Save Log</button>
        </form>
    `;
    openModal(html);
}

function handleMealSubmit() {
    const foodId = document.getElementById('input-food').value;
    const qty = Number(document.getElementById('input-quantity').value);
    const foodItem = FOODS.find(f => f.id === foodId);

    if (foodItem) {
        const meal = {
            date: currentDate,
            name: foodItem.name,
            unit: foodItem.unit,
            quantity: qty,
            calories: foodItem.calories * qty,
            protein: foodItem.protein * qty,
            carbs: foodItem.carbs * qty,
            fat: foodItem.fat * qty,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };
        Store.addMeal(meal);
        closeModal();
    }
}

// 4. History (Simple Placeholder for now)
function renderHistory() {
    mainContent.innerHTML = `
        <div style="text-align: center; margin-top: 40px;">
            <i class="ph ph-calendar" style="font-size: 48px; color: var(--text-secondary); margin-bottom: 16px;"></i>
            <h2>History</h2>
            <p style="color: var(--text-secondary);">Feature coming soon.</p>
            <p style="color: var(--text-secondary); font-size: 12px;">(Use the date picker in future updates)</p>
        </div>
    `;
}

// --- Modal Helpers ---
function openModal(contentHtml) {
    modalContent.innerHTML = contentHtml;
    modalContainer.classList.remove('hidden');
}

function closeModal() {
    modalContainer.classList.add('hidden');
}

// Start App
init();

