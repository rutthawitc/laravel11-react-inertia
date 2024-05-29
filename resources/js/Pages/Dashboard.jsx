import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP } from "@/constant";

export default function Dashboard({
    auth,
    totalPendingTasks,
    myPendingTasks,
    myInprogressTasks,
    totalInprogressTasks,
    myCompletedTasks,
    totalCompletedTasks,
    activeTasks,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-amber-600  text-2xl  font-semibold">
                                Tasks Pending
                            </h3>
                            <p className="mt-1 text-lg">
                                <span className="mr-2">{myPendingTasks}</span>/
                                <span className="ml-2">
                                    {totalPendingTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-cyan-600  text-2xl  font-semibold">
                                Tasks Inprogress
                            </h3>
                            <p className="mt-3 text-lg">
                                <span className="mr-2">
                                    {myInprogressTasks}
                                </span>
                                /
                                <span className="ml-2">
                                    {totalInprogressTasks}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-green-600 text-2xl  font-semibold">
                                Tasks Completed
                            </h3>
                            <p className="mt-3 text-lg">
                                <span className="mr-2">{myCompletedTasks}</span>
                                /
                                <span className="ml-2">
                                    {totalCompletedTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-3">
                    {/* <pre>{JSON.stringify(activeTasks, null, 2)}</pre> */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-rose-600  text-xl  font-semibold">
                                My Active Tasks
                            </h3>

                            <table className="w-full text-sm text-left text-gray-800 mt-3 rtl:text-left">
                                <thead className="text-xs text-gray-700 uppercase ">
                                    <tr className="text-xs bg-slate-200 rounded-md border-b-2 border-slate-500">
                                        <th className="px-2 py-3 font-semibold">
                                            ID
                                        </th>
                                        <th className="px-2 py-3 font-semibold">
                                            Project Name
                                        </th>
                                        <th className="px-2 py-3 font-semibold">
                                            Task Name
                                        </th>
                                        <th className="px-2 py-3 font-semibold">
                                            Status
                                        </th>
                                        <th className="px-2 py-3 font-semibold">
                                            Due Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeTasks.data.map((task) => (
                                        <tr key={task.id} className="border-b">
                                            <td className="px-2 py-2">
                                                {task.id}
                                            </td>
                                            <td className="px-2 py-2">
                                                <Link
                                                    href={route(
                                                        "project.show",
                                                        task.project.id
                                                    )}
                                                    className="hover:underline"
                                                >
                                                    {task.project.name}
                                                </Link>
                                            </td>
                                            <td className="px-2 py-2">
                                                <Link
                                                    href={route(
                                                        "task.show",
                                                        task.id
                                                    )}
                                                    className="hover:underline"
                                                >
                                                    {task.name}
                                                </Link>
                                            </td>
                                            <td className="px-2 py-2">
                                                <span
                                                    className={
                                                        "px-2 py-1 rounded text-white " +
                                                        TASK_STATUS_CLASS_MAP[
                                                            task.status
                                                        ]
                                                    }
                                                >
                                                    {
                                                        TASK_STATUS_TEXT_MAP[
                                                            task.status
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="text-nowrap px-2 py-2">
                                                {task.due_date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
