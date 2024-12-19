import AppLayout from "@/Layouts/AppLayout";
import { Transition } from "@headlessui/react";
import { usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";


const CreateRetweet = ( props ) => {

    const user = usePage().props.auth.user;
    const tweet = usePage().props.tweet;
    console.log(tweet);

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm(
            {
                parent_id: '',
                body: '',
            }
        );

    const submit = (e) => {
        e.preventDefault();

        post(route('retweet.store'), {
            onSuccess: () => {
                setData('body', '');
            },
            onFinish: () => setData('body', ''),
        });
    };

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                <TextInput
                    id="body"
                    className="mt-1 block w-full"
                    value={data.body}
                    onChange={(e) => setData('body', e.target.value)}
                    required
                    isFocused
                    autoComplete="body"
                />

                <input type="hidden" name="parent_id" value={tweet.id} />

                <InputError className="mt-2" message={errors.body} />
            </div>
            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Tweet</PrimaryButton>

                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">
                        Posted.
                    </p>
                </Transition>
            </div>
        </form>
    );
};

CreateRetweet.layout = page => <AppLayout user={page.props.auth.user} children={page} />;

export default CreateRetweet;