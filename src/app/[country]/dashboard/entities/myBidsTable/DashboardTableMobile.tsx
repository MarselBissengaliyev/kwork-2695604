import { Container } from '@/components/Container';
import React from 'react';

interface Column {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
  style?: React.CSSProperties;
}

interface TableProps {
  data: Array<Record<string, any>>;
  columns: Column[];
  rowKey: string; // уникальный ключ для каждой строки
}

const DashBoardTableMoblie: React.FC<TableProps> = ({ data, columns, rowKey }) => {
  return (
    <Container>
      <div style={{ width: '100%' }}>
        {data.map((row) => (
          <div
            key={row[rowKey]}
            className="tw-border-[1px] tw-border-black tw-bg-white tw-rounded-lg tw-p-4 tw-mb-4"
            style={{ border: '1px solid #ECECEC' }}
          >
            {columns.map((col, index) => (
              <div key={index} className="tw-flex tw-justify-between tw-py-1">
                <span className="tw-text-gray-500 tw-text-sm">{col.header}</span>
                <span
                  className={`tw-text-sm ${
                    col.accessor === 'BidStatus' && row[col.accessor] === 'OutBid'
                      ? 'tw-text-red-500'
                      : col.accessor === 'Lot'
                      ? 'tw-text-blue-500'
                      : 'tw-text-gray-800'
                  }`}
                  style={col.style}
                >
                  {col.render ? (
                    <div
                      style={
                        React.isValidElement(col.render(row[col.accessor], row)) &&
                        (col.render(row[col.accessor], row) as React.ReactElement).type === 'button'
                          ? { display: 'flex', justifyContent: 'center', width: '100%' }
                          : {}
                      }
                    >
                      {col.render(row[col.accessor], row)}
                    </div>
                  ) : (
                    row[col.accessor]
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DashBoardTableMoblie;
