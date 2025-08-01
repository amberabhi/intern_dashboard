SETUP INSTRUCTIONS
Follow the steps below to set up the project on your local machine:

1. clone the repository 
git clone https://github.com/amberabhi/intern_dashboard.git
cd intern_dashboard
<img width="656" height="53" alt="image" src="https://github.com/user-attachments/assets/c87c180b-4606-451a-84b1-7aa7a1bffa64" />




3. set up backend(django)
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate          # On Windows: venv\Scripts\activate

# Navigate to backend directory
cd intern_backend

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Run backend server
python manage.py runserver



3.set up frontend (react + vite)
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev
