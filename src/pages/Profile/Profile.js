import React from "react";
import { FormControl, Form, Label, Input, Button } from "./Style";

const Profile = () => (
  <FormControl>
    <Form>
      <Label>Name</Label>
      <Input type="text" />
      <Label>Email</Label>
      <Input type="text" />
      <Label>Reset Password</Label>
      <Input type="password" />
      <Label>Confirm Password</Label>
      <Input type="password" />
      <Button>Save </Button>
    </Form>
  </FormControl>
);

export default Profile;
