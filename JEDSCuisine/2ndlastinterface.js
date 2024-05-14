import tkinter as tk

class OrderingInterface:
    def __init__(self, root):
        self.root = root
        self.root.title("JEDS Cafeteria Orders")
        self.root.geometry("600x400")
        self.root.configure(bg="white")

        Red header with the title
        self.header_frame = tk.Frame(self.root, bg="red", height=50)
        self.header_frame.pack(fill="x")

        self.header_label = tk.Label(self.header_frame, text="Received orders for JEDS Cafeteria", fg="white", bg="red", font=("Helvetica", 14))
        self.header_label.pack(pady=10)

        middle section with message
        self.middle_frame = tk.Frame(self.root, bg="white")
        self.middle_frame.pack(expand=True)

        self.message_label = tk.Label(self.middle_frame, text="There are no new orders", font=("Helvetica", 18), bg="white")
        self.message_label.pack(pady=50)

        Logo at the bottom
        self.logo_frame = tk.Frame(self.root, bg="red and black")
        self.logo_frame.pack(side="bottom", fill="x")

        You can replace 'logo.png' with your logo file path
        self.logo_image = tk.PhotoImage(file="logo.png")
        self.logo_label = tk.Label(self.logo_frame, image=self.logo_image, bg="white")
        self.logo_label.pack(pady=10)

Create the main application window
root = tk.Tk()
app = OrderingInterface(root)
root.mainloop()
