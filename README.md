A simple and responsive Intern Dashboard built using Django for the backend and React + TailwindCSS for the frontend. This dashboard helps track and visualize intern-related data such as , rankings, and contributions in a clean and user-friendly interface.

🚀 Tech Stack: Django · React · TailwindCSS · Vite

SETUP INSTRUCTIONS
Follow the steps below to set up the project on your local machine:

###  📦 Clone the Repository

```bash
git clone https://github.com/amberabhi/intern_dashboard.git
cd intern_dashboard
```



### ⚙️ Backend Setup (Django)

```bash
# 1. Create and activate virtual environment
python -m venv venv
source venv/bin/activate          # On Windows: venv\Scripts\activate

# 2. Navigate to backend directory
cd intern_backend

# 3. Install required dependencies
pip install django djangorestframework django-cors-headers

# 4. Apply database migrations
python manage.py migrate

# 5. Run the backend server
python manage.py runserver
```


3. Frontend
### 💻 Frontend Setup (React + Vite + TailwindCSS)

```bash
# 1. Navigate to frontend directory
cd intern_frontend

# 2. Install dependencies
npm install
npm install react-router-dom      # For routing support

# 3. Start the frontend development server
npm run dev
```








