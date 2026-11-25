// Univo - Hostel & Residence Mock Data

export const mockHostelInfo = {
  block: "Block A - Boys Residence",
  roomNumber: "308",
  roomType: "2-Sharing",
  floor: "3rd Floor",
  warden: {
    name: "Dr. R. K. Saxena",
    phone: "+91 9876543210",
    email: "rk.saxena@univo.edu"
  },
  messStatus: "Active",
  messPlan: "North & South Special Plan",
  monthlyFee: "₹8,500 / month",
  checkInDate: "Jul 15, 2026"
};

export const mockMessMenu = {
  Monday: {
    breakfast: "Poha, Boiled Eggs, Toast, Butter, Tea/Coffee, Milk",
    lunch: "Jeera Rice, Dal Fry, Aloo Gobi, Roti, Raita, Salad",
    dinner: "Peas Pulao, Paneer Butter Masala, Roti, Dal Tadka, Gulab Jamun"
  },
  Tuesday: {
    breakfast: "Idli, Sambhar, Coconut Chutney, Banana, Tea/Coffee",
    lunch: "Plain Rice, Rajma Masala, Mix Veg, Roti, Curd, Pickle",
    dinner: "Fried Rice, Chilli Paneer, Roti, Dal Makhani, Ice Cream"
  },
  Wednesday: {
    breakfast: "Aloo Paratha, Curd, Pickle, Sprouts, Tea/Coffee",
    lunch: "Rice, Chole, Baingan Bharta, Roti, Salad, Buttermilk",
    dinner: "Jeera Rice, Kadhi Pakora, Roti, Aloo Matar, Kheer"
  },
  Thursday: {
    breakfast: "Upma, Vada, Sambar, Fruits, Tea/Coffee",
    lunch: "Biryani, Raita, Dal Tadka, Roti, Salad, Papad",
    dinner: "Rice, Malai Kofta, Roti, Moong Dal, Rasmalai"
  },
  Friday: {
    breakfast: "Chole Bhature, Pickle, Onion, Lassi, Tea/Coffee",
    lunch: "Rice, Sambar, Rasam, Cabbage Poriyal, Roti, Curd",
    dinner: "Pulao, Shahi Paneer, Roti, Dal Fry, Fruit Custard"
  },
  Saturday: {
    breakfast: "Dosa, Sambhar, Chutney, Boiled Eggs, Tea/Coffee",
    lunch: "Lemon Rice, Dal Palak, Bhindi Fry, Roti, Raita",
    dinner: "Pav Bhaji, Pulao, Paneer Tikka, Roti, Jalebi"
  },
  Sunday: {
    breakfast: "Pancakes, Omelette, Bread, Jam, Juice, Tea/Coffee",
    lunch: "Special Biryani, Paneer Tikka Masala, Naan, Raita, Gulab Jamun",
    dinner: "Pasta, Garlic Bread, Mix Veg, Dal Fry, Roti, Ice Cream"
  }
};

export const mockComplaints = [
  {
    id: "CMP-1",
    title: "AC not cooling properly in Room 308",
    category: "Maintenance",
    status: "In Progress",
    dateSubmitted: "Aug 12, 2026",
    description: "Air conditioner in Room 308 is blowing warm air despite being set to 18°C. Issue since Aug 10."
  },
  {
    id: "CMP-2",
    title: "Bathroom tap leaking continuously",
    category: "Plumbing",
    status: "Resolved",
    dateSubmitted: "Aug 05, 2026",
    description: "Hot water tap in shared bathroom on 3rd floor was leaking. Fixed by maintenance on Aug 07."
  },
  {
    id: "CMP-3",
    title: "Corridor light flickering near Room 310",
    category: "Electrical",
    status: "Pending",
    dateSubmitted: "Aug 14, 2026",
    description: "LED tube light in the corridor near Room 310 keeps flickering during night hours."
  }
];

export const mockLeaveHistory = [
  {
    id: "LP-1",
    reason: "Family Function - Brother's Wedding",
    fromDate: "Aug 01, 2026",
    toDate: "Aug 04, 2026",
    status: "Approved",
    approvedBy: "Dr. R. K. Saxena (Warden)"
  },
  {
    id: "LP-2",
    reason: "Medical Visit - Dental Appointment",
    fromDate: "Jul 20, 2026",
    toDate: "Jul 21, 2026",
    status: "Approved",
    approvedBy: "Dr. R. K. Saxena (Warden)"
  }
];
