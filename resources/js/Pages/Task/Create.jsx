import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const Create = ({ auth, projects, users }) => {
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: "",
        status: "",
        description: "",
        due_date: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("task.store"));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create New Tasks
                    </h2>
                </div>
            }
        >
            <Head title="Tasks" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            className="p-4 sm:p-8 shadow sm:rounded-md"
                            onSubmit={onSubmit}
                        >
                            <div>
                                <InputLabel
                                    htmlFor="task_project_id"
                                    value="Project"
                                />
                                <SelectInput
                                    id="task_project_id"
                                    name="project_id"
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData("project_id", e.target.value)
                                    }
                                >
                                    <option value="">Select Project</option>
                                    {projects.data.map((project) => (
                                        <option
                                            key={project.id}
                                            value={project.id}
                                        >
                                            {project.name}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    message={errors.project_id}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_image_path"
                                    value="Task Image"
                                />
                                <TextInput
                                    id="task_image_path"
                                    name="image"
                                    type="file"
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_name"
                                    value="Task Name"
                                />
                                <TextInput
                                    id="task_name"
                                    name="name"
                                    type="text"
                                    isFocused={true}
                                    value={data.name}
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_description"
                                    value="Task Description"
                                />
                                <TextAreaInput
                                    id="task_description"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_due_date"
                                    value="Task Due Date"
                                />
                                <TextInput
                                    id="task_due_date"
                                    name="due_date"
                                    type="date"
                                    value={data.due_date}
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData("due_date", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.due_date}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_status"
                                    value="Task Status"
                                />
                                <SelectInput
                                    id="task_status"
                                    name="status"
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="">Select Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="in_progress">
                                        In Progress
                                    </option>
                                    <option value="completed">Completed</option>
                                </SelectInput>
                                <InputError
                                    message={errors.task_status}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_priority"
                                    value="Task Priority"
                                />
                                <SelectInput
                                    id="task_priority"
                                    name="priority"
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData("priority", e.target.value)
                                    }
                                >
                                    <option value="">Select Priority</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Meduim</option>
                                    <option value="high">High</option>
                                </SelectInput>
                                <InputError
                                    message={errors.priority}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_assigned_user"
                                    value="Assigned User"
                                />
                                <SelectInput
                                    id="task_assigned_user"
                                    name="assigned_user_id"
                                    className="mt-1 block w-full bg-slate-300"
                                    onChange={(e) =>
                                        setData(
                                            "assigned_user_id",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">Select User</option>

                                    {users.data.map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    message={errors.assigned_user_id}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    className="inline-block bg-slate-300 text-slate-900 px-3 py-1 rounded shadow transition-all duration-300 hover:bg-slate-500 mr-2"
                                    href={route("task.index")}
                                >
                                    Cancel
                                </Link>

                                <button
                                    className="ml-2 bg-blue-500 text-white px-3 py-1 rounded shadow transition-all duration-300 hover:bg-blue-600"
                                    type="submit"
                                >
                                    Add Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
