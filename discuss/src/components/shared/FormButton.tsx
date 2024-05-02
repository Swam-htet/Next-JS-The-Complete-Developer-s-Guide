import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
     children: React.ReactNode;
}
export default function FormButton(props: FormButtonProps) {
     const { pending } = useFormStatus();
     return (
          <Button isLoading={pending} type="submit" color="primary">
               {props.children}
          </Button>
     );
}
