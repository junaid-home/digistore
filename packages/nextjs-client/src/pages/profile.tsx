import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Button, Input, Label } from "@digistore/react-components";

import { SidebarWithLinksLayout } from "../components/layout";

import { selectAuthState, setUser } from "../store/auth-slice";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_DATA } from "../graphql/auth";

function Profile() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, token } = useSelector(selectAuthState);
  const [updateUser, { loading }] = useMutation(UPDATE_USER_DATA);

  const [formData, setFormData] = React.useState({
    name: user?.name,
    phone: user?.phone,
    postal_code: user?.address?.postal_code,
    city: user?.address?.city,
    residential_address: user?.address?.residential_address,
  });

  const handleUpdateProfile: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    const { data: results } = await updateUser({
      variables: {
        user: { ...formData },
      },
      context: {
        headers: {
          authorization: token,
        },
      },
    });

    if (results.updateUser.status === "success") {
      alert.success("User Successfully Updated!");
      dispatch(
        setUser({
          ...user,
          name: formData.name,
          phone: formData.phone,
          address: {
            ...user?.address,
            city: formData.city,
            postal_code: formData.postal_code,
            residential_address: formData.residential_address,
          },
        })
      );
    } else {
      alert.error(results.updateUser.message);
    }
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
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            fullWidth
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData((data) => ({ ...data, phone: e.target.value }))
            }
          />
        </div>
        <div className="bm-sm">
          <Label htmlFor="postal_code">Postal Code</Label>
          <Input
            id="postal_code"
            fullWidth
            placeholder="Postal Code"
            value={formData.postal_code}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                postal_code: parseInt(e.target.value),
              }))
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
            value={formData.residential_address}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                residential_address: e.target.value,
              }))
            }
          />
        </div>
        <div className="tm-md">
          <Button
            type="submit"
            isLoading={loading}
            isDisabled={loading}
            loadingText="Updating Profile..."
            color="secondary"
          >
            Update Profile
          </Button>
        </div>
      </form>
    </SidebarWithLinksLayout>
  );
}

export default Profile;
