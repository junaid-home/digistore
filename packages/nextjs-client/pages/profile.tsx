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
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const [city, setCity] = React.useState(user.city);
  const [address, setAddress] = React.useState(user.address);

  return (
    <SidebarWithLinksLayout>
      <form>
        <div className="bm-sm">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            fullWidth
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="bm-sm">
          <Label htmlFor="email">Email</Label>
          <Input
            id="Email"
            fullWidth
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="bm-sm">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            fullWidth
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="bm-sm">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            fullWidth
            placeholder="Residential Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
