import * as React from "react";

import { SidebarWithLinksLayout } from "../components/layout";

import { Button, Input, Label } from "@digistore/react-components";

const user = {
  name: "Junaid Javed",
  email: "jj123dev@gmail.com",
  city: "Haripur",
  address: "Mohallah Lateefabad village Darwesh P/O Haripur",
};

function Profile() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    city: "",
    address: "",
  });

  const handleUpdateProfile: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <SidebarWithLinksLayout>
      <form onSubmit={handleUpdateProfile}>
        <div className="bm-sm">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            fullWidth
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((data) => ({ ...data, name: e.target.value }))
            }
          />
        </div>
        <div className="bm-sm">
          <Label htmlFor="email">Email</Label>
          <Input
            id="Email"
            fullWidth
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData((data) => ({ ...data, email: e.target.value }))
            }
          />
        </div>
        <div className="bm-sm">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            fullWidth
            placeholder="City"
            value={formData.city}
            onChange={(e) =>
              setFormData((data) => ({ ...data, city: e.target.value }))
            }
          />
        </div>
        <div className="bm-sm">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            fullWidth
            placeholder="Residential Address"
            value={formData.address}
            onChange={(e) =>
              setFormData((data) => ({ ...data, address: e.target.value }))
            }
          />
        </div>
        <div className="tm-md">
          <Button type="submit" color="secondary">
            Update Profile
          </Button>
        </div>
      </form>
    </SidebarWithLinksLayout>
  );
}

export default Profile;
