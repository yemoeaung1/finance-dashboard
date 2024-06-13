import { TransactionsTable } from "../../components/ui/table";
import Link from 'next/link'
import { Modal } from "../../components/modal";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
  };

export default function Home({ searchParams }: SearchParamProps) {

    const show = searchParams?.show;
    
    return (
        <div className="bg-white">
            <div className="px-4 py-2 lg:py-10">   
            <Link href="/?show=true"><button className="btn btn-block btn-primary">Add a new transaction</button></Link>
            </div>
            <TransactionsTable />

            {show && <Modal />}
        </div>
    )
}