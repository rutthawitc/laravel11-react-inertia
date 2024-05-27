import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { USER_STATUS_TEXT_MAP, USER_STATUS_CLASS_MAP } from "@/constant";
import { Head } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

const Show = ({ auth, user, tasks, queryParams }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {`User "${user.name}"`}
                </h2>
            }
        >
            <Head title={`User "${user.name}"`} />
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2">
                        <div>
                            <img
                                src={user.image_path}
                                alt={user.name}
                                className="w-full h-64 object-cover rounded-md"
                            />
                        </div>
                        <div className="p-6 text-gray-900">
                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            User Id
                                        </label>
                                        <p className="mt-1">{user.id}</p>
                                    </div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            User Name
                                        </label>
                                        <p className="mt-4">{user.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            User Status
                                        </label>
                                        <p className="mt-1">
                                            <span
                                                className={
                                                    "px-2 py-1 rounded text-white " +
                                                    USER_STATUS_CLASS_MAP[
                                                        user.status
                                                    ]
                                                }
                                            >
                                                {
                                                    USER_STATUS_TEXT_MAP[
                                                        user.status
                                                    ]
                                                }
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Created By
                                        </label>
                                        <p className="mt-1">
                                            {user.createdBy.name}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Due Date
                                        </label>
                                        <p className="mt-1">{user.due_date}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Created Date
                                        </label>
                                        <p className="mt-1">
                                            {user.created_at}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Updated By
                                        </label>
                                        <p className="mt-1">
                                            {user.updatedBy.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-lg">
                                    User Description
                                </label>
                                <p className="mt-1 font-light">
                                    {user.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2">
                        <div className="p-2 text-gray-900">
                            <TasksTable
                                tasks={tasks}
                                queryParams={queryParams}
                                hideUserColumn={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
