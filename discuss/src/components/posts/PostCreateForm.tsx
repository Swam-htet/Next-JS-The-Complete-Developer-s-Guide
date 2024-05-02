'use client';
import {
     Popover,
     PopoverContent,
     PopoverTrigger,
     Button,
     Input,
     Textarea,
} from '@nextui-org/react';
import { useFormState } from 'react-dom';
import FormButton from '../shared/FormButton';
import * as actions from '@/actions';

interface CreatePostFormState {
     errors: {
          title?: string[];
          content?: string[];
          _form?: string[];
     };
}

export default function PostCreateForm() {
     const initialState: CreatePostFormState = {
          errors: {},
     };

     const [formState, action] = useFormState(actions.createPost, initialState);
     return (
          <div className="flex gap-2">
               <Popover placement="bottom-start">
                    <PopoverTrigger>
                         <Button color="primary">Create Post</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                         <form action={action}>
                              <div className="flex flex-col gap-4 p-4">
                                   <h2 className="text-xl font-light">
                                        Create a Post
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
                                        label="Content"
                                        name="content"
                                        labelPlacement="outside"
                                        placeholder="Content"
                                        className="input"
                                        isInvalid={!!formState.errors.content}
                                        errorMessage={formState.errors.content?.join(
                                             ', '
                                        )}
                                   />
                                   {formState.errors._form && (
                                        <div className="text-red-500 bg-red-200 border-2 border-red-500 rounded-3 p-4">
                                             {formState.errors._form.join(', ')}
                                        </div>
                                   )}
                                   <FormButton>Create Post</FormButton>
                              </div>
                         </form>
                    </PopoverContent>
               </Popover>
          </div>
     );
}
