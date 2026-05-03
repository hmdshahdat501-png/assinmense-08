"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function Updetprofile() {
    const OnSubmitl = async(e) =>{
            e.preventDefault();
    const formData = new FormData(e.currentTarget);
   const userData = Object.fromEntries(formData.entries());
       await authClient.updateUser({
    image: userData.image,
    name:  userData.name
})
    }
    
  return (
    <Modal>
      <Button variant="secondary">Updaet Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={OnSubmitl} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Email</Label>
                    <Input placeholder="Enter Image URL" />
                  </TextField>
                 
                  <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Send Message</Button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
             
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}