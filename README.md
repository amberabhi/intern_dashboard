

SETUP INSTRUCTIONS
Follow the steps below to set up the project on your local machine:

1. clone the repository
<img width="656" height="53" alt="image" src="https://github.com/user-attachments/assets/c87c180b-4606-451a-84b1-7aa7a1bffa64" />




2. set up backend(django)
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
cd frontend

# 2. Install dependencies
npm install
npm install react-router-dom      # For routing support

# 3. Start the frontend development server
npm run dev
```








