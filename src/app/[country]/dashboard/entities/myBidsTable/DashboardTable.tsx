import { Container } from '@/components/Container';
import React from 'react';
import PaginationBlock from '../paginationBlock/PaginationBlock';

interface Bid {
  lot: number;
  vin: string;
  vehicle: string;
  saleDate: string;
  state: string;
  bidStatus: string;
  myMaxBid: number;
  saleType: string | undefined;
}

interface Column {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
  style?: React.CSSProperties;
}

interface TableProps {
  data: {
    array: any[];
    results: number;
    pages: number;
  };
  columns: Column[];
}

const DashBoardTable: React.FC<TableProps> = ({ data, columns }) => {
  console.log("data=", data)
  return (
    <Container className={""}>
      <div style={{ width: '100%' }}>
        <table
          className="tw-w-full tw-border-separate tw-border-spacing-y-4 tw-relative"
          style={{ borderCollapse: 'separate' }}
        >
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="tw-p-4 tw-text-left tw-border-b tw-border-[#ECECEC]"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.array.length > 0 ? (
              data.array.map((row, idx) => (
                <tr className="tw-bg-[#ffffff] tw-rounded-[10px] tw-h-[80px]" key={idx}>
                  {columns.map((col, index) => (
                    <td style={col.style} className="tw-p-4 tw-border-y-[1px] tw-border-[#ECECEC] first:tw-border-l-[1px] last:tw-border-r-[1px] tw-h-[80px]" key={index}>
                      {col.render
                        ? col.render(row[col.accessor] ?? '-', row)
                        : row[col.accessor] ?? '-'}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length}>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="tw-mt-5">
        <PaginationBlock currentBids={data} />
      </div>
    </Container>
  );
};

export default DashBoardTable;
