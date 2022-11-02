import { ExplorerItem } from '@sd/client';
import { cva, tw } from '@sd/ui';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { getExplorerStore } from '../../util/explorerStore';
import { ObjectKind } from '../../util/kind';
import FileThumb from './FileThumb';
import { isObject } from './utils';

const NameArea = tw.div`flex justify-center`;

const nameContainerStyles = cva(
	'px-1.5 py-[1px] truncate text-center rounded-md text-xs font-medium cursor-default',
	{
		variants: {
			selected: {
				true: 'bg-accent text-white'
			}
		}
	}
);

interface Props extends HTMLAttributes<HTMLDivElement> {
	data: ExplorerItem;
	selected: boolean;
	index: number;
}

function FileItem({ data, selected, index, ...rest }: Props) {
	const objectData = data ? (isObject(data) ? data : data.object) : null;
	const isVid = objectData?.kind === 7;

	return (
		<div
			onContextMenu={(e) => {
				const objectId = isObject(data) ? data.id : data.object?.id;
				if (objectId != undefined) {
					getExplorerStore().contextMenuObjectId = objectId;
					if (index != undefined) {
						getExplorerStore().selectedRowIndex = index;
						getExplorerStore().contextMenuActiveObject = isObject(data) ? data : data.object;
					}
				}
			}}
			{...rest}
			draggable
			className={clsx('inline-block w-[100px] mb-3', rest.className)}
		>
			<div
				style={{ width: getExplorerStore().gridItemSize, height: getExplorerStore().gridItemSize }}
				className={clsx(
					'border-2 border-transparent rounded-lg text-center mb-1 active:translate-y-[1px]',
					{
						'bg-app-selected/30': selected
					}
				)}
			>
				<div
					className={clsx(
						'flex relative items-center justify-center h-full  p-1 rounded border-transparent border-2 shrink-0'
					)}
				>
					<FileThumb
						className={clsx(
							'border-4 border-white shadow shadow-black/40 object-cover max-w-full max-h-full w-auto overflow-hidden',
							isVid && '!border-black rounded border-x-0 border-y-[7px]'
						)}
						data={data}
						kind={ObjectKind[objectData?.kind || 0]}
						size={getExplorerStore().gridItemSize}
					/>
					{data?.extension && isVid && (
						<div
							className={clsx(
								'absolute text-white bottom-[19px] font-semibold opacity-70 right-2 py-0.5 px-1 text-[8px] uppercase bg-black/90 rounded',
								!objectData.has_thumbnail &&
									'left-auto right-auto !bg-transparent !text-[12px] !bottom-3.5'
							)}
						>
							{data.extension}
						</div>
					)}
				</div>
			</div>
			<NameArea>
				<span className={nameContainerStyles({ selected })}>
					{data?.name}
					{data?.extension && `.${data.extension}`}
				</span>
			</NameArea>
		</div>
	);
}

export default FileItem;
