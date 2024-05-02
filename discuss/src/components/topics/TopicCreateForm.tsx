'use client';

import {
     Button,
     Input,
     Popover,
     PopoverContent,
     PopoverTrigger,
     Textarea,
} from '@nextui-org/react';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';
import FormButton from '../shared/FormButton';

interface CreateTopicFormState {
     errors: {
          title?: string[];
          description?: string[];
          _form?: string[];
     };
}

export default function TopicCreateForm() {
     const initialState: CreateTopicFormState = {
          errors: {},
     };

     const [formState, action] = useFormState(
          actions.createTopic,
          initialState
     );
     return (
          <div className="flex gap-2">
               <Popover placement="bottom-start">
                    <PopoverTrigger>
                         <Button color="primary">Create Topic</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                         <form action={action}>
                              <div className="flex flex-col gap-4 p-4 w-80">
                                   <h2 className="text-xl font-light">
                                        Create a Topic
                                   </h2>
                                   <Input
                                        type="text"
                                        label="Title"
                                        name="title"
                                        labelPlacement="outside"
                                        placeholder="Title"
                                        className="input"
                                        isInvalid={!!formState.errors.title}
                                        errorMessage={formState.errors.title?.join(
                                             ', '
                                        )}
                                   />
                                   <Textarea
                                        type="text"
                                        label="Description"
                                        name="description"
                                        labelPlacement="outside"
                                        placeholder="Description"
                                        className="input"
                                        isInvalid={
                                             !!formState.errors.description
                                        }
                                        errorMessage={formState.errors.description?.join(
                                             ', '
                                        )}
                                   />
                                   {formState.errors._form && (
                                        <div className="text-red-500 bg-red-200 border-2 border-red-500 rounded-3 p-4">
                                             {formState.errors._form.join(', ')}
                                        </div>
                                   )}
                                   {/* <Button
                                        color="primary"
                                        variant="shadow"
                                        className="w-full"
                                        type="submit"
                                   >
                                        Create
                                   </Button> */}
                                   <FormButton>Save</FormButton>
                              </div>
                         </form>
                    </PopoverContent>
               </Popover>
          </div>
     );
}
