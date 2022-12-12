/* eslint-disable */
// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "buildInfo", input: never, result: BuildInfo } | 
        { key: "files.readMetadata", input: LibraryArgs<number>, result: null } | 
        { key: "jobs.getHistory", input: LibraryArgs<null>, result: Array<JobReport> } | 
        { key: "jobs.getRunning", input: LibraryArgs<null>, result: Array<JobReport> } | 
        { key: "jobs.isRunning", input: LibraryArgs<null>, result: boolean } | 
        { key: "keys.getDefault", input: LibraryArgs<null>, result: string | null } | 
        { key: "keys.getKey", input: LibraryArgs<string>, result: string } | 
        { key: "keys.hasMasterPassword", input: LibraryArgs<null>, result: boolean } | 
        { key: "keys.list", input: LibraryArgs<null>, result: Array<StoredKey> } | 
        { key: "keys.listMounted", input: LibraryArgs<null>, result: Array<string> } | 
        { key: "library.getStatistics", input: LibraryArgs<null>, result: Statistics } | 
        { key: "library.list", input: never, result: Array<LibraryConfigWrapped> } | 
        { key: "locations.getById", input: LibraryArgs<number>, result: Location | null } | 
        { key: "locations.getExplorerData", input: LibraryArgs<LocationExplorerArgs>, result: ExplorerData } | 
        { key: "locations.indexer_rules.get", input: LibraryArgs<number>, result: IndexerRule } | 
        { key: "locations.indexer_rules.list", input: LibraryArgs<null>, result: Array<IndexerRule> } | 
        { key: "locations.list", input: LibraryArgs<null>, result: Array<{ id: number, pub_id: Array<number>, node_id: number, name: string | null, local_path: string | null, total_capacity: number | null, available_capacity: number | null, filesystem: string | null, disk_type: number | null, is_removable: boolean | null, is_online: boolean, is_archived: boolean, date_created: string, node: Node }> } | 
        { key: "nodeState", input: never, result: NodeState } | 
        { key: "normi.composite", input: never, result: NormalisedCompositeId } | 
        { key: "normi.org", input: never, result: NormalisedOrganisation } | 
        { key: "normi.user", input: never, result: NormalisedUser } | 
        { key: "normi.userSync", input: never, result: NormalisedUser } | 
        { key: "normi.version", input: never, result: string } | 
        { key: "tags.get", input: LibraryArgs<number>, result: Tag | null } | 
        { key: "tags.getExplorerData", input: LibraryArgs<number>, result: ExplorerData } | 
        { key: "tags.getForObject", input: LibraryArgs<number>, result: Array<Tag> } | 
        { key: "tags.list", input: LibraryArgs<null>, result: Array<Tag> } | 
        { key: "volumes.list", input: never, result: Array<Volume> },
    mutations: 
        { key: "files.decryptFiles", input: LibraryArgs<FileDecryptorJobInit>, result: null } | 
        { key: "files.delete", input: LibraryArgs<number>, result: null } | 
        { key: "files.encryptFiles", input: LibraryArgs<FileEncryptorJobInit>, result: null } | 
        { key: "files.setFavorite", input: LibraryArgs<SetFavoriteArgs>, result: null } | 
        { key: "files.setNote", input: LibraryArgs<SetNoteArgs>, result: null } | 
        { key: "jobs.generateThumbsForLocation", input: LibraryArgs<GenerateThumbsForLocationArgs>, result: null } | 
        { key: "jobs.identifyUniqueFiles", input: LibraryArgs<IdentifyUniqueFilesArgs>, result: null } | 
        { key: "jobs.objectValidator", input: LibraryArgs<ObjectValidatorArgs>, result: null } | 
        { key: "keys.add", input: LibraryArgs<KeyAddArgs>, result: null } | 
        { key: "keys.backupKeystore", input: LibraryArgs<string>, result: null } | 
        { key: "keys.changeMasterPassword", input: LibraryArgs<MasterPasswordChangeArgs>, result: string } | 
        { key: "keys.clearMasterPassword", input: LibraryArgs<null>, result: null } | 
        { key: "keys.deleteFromLibrary", input: LibraryArgs<string>, result: null } | 
        { key: "keys.mount", input: LibraryArgs<string>, result: null } | 
        { key: "keys.onboarding", input: LibraryArgs<OnboardingArgs>, result: OnboardingKeys } | 
        { key: "keys.restoreKeystore", input: LibraryArgs<RestoreBackupArgs>, result: number } | 
        { key: "keys.setDefault", input: LibraryArgs<string>, result: null } | 
        { key: "keys.setMasterPassword", input: LibraryArgs<SetMasterPasswordArgs>, result: null } | 
        { key: "keys.unmount", input: LibraryArgs<string>, result: null } | 
        { key: "keys.unmountAll", input: LibraryArgs<null>, result: null } | 
        { key: "keys.updateKeyName", input: LibraryArgs<KeyNameUpdateArgs>, result: null } | 
        { key: "library.create", input: string, result: LibraryConfigWrapped } | 
        { key: "library.delete", input: string, result: null } | 
        { key: "library.edit", input: EditLibraryArgs, result: null } | 
        { key: "locations.create", input: LibraryArgs<LocationCreateArgs>, result: null } | 
        { key: "locations.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.fullRescan", input: LibraryArgs<number>, result: null } | 
        { key: "locations.indexer_rules.create", input: LibraryArgs<IndexerRuleCreateArgs>, result: IndexerRule } | 
        { key: "locations.indexer_rules.delete", input: LibraryArgs<number>, result: null } | 
        { key: "locations.quickRescan", input: LibraryArgs<null>, result: null } | 
        { key: "locations.update", input: LibraryArgs<LocationUpdateArgs>, result: null } | 
        { key: "tags.assign", input: LibraryArgs<TagAssignArgs>, result: null } | 
        { key: "tags.create", input: LibraryArgs<TagCreateArgs>, result: Tag } | 
        { key: "tags.delete", input: LibraryArgs<number>, result: null } | 
        { key: "tags.update", input: LibraryArgs<TagUpdateArgs>, result: null },
    subscriptions: 
        { key: "invalidateQuery", input: never, result: InvalidateOperationEvent } | 
        { key: "jobs.newThumbnail", input: LibraryArgs<null>, result: string }
};

export type Algorithm = "XChaCha20Poly1305" | "Aes256Gcm"

export interface BuildInfo { version: string, commit: string }

export interface ConfigMetadata { version: string | null }

export interface EditLibraryArgs { id: string, name: string | null, description: string | null }

export type ExplorerContext = { type: "Location" } & Location | { type: "Tag" } & Tag

export interface ExplorerData { context: ExplorerContext, items: Array<ExplorerItem> }

export type ExplorerItem = { type: "Path" } & { id: number, is_dir: boolean, location_id: number, materialized_path: string, name: string, extension: string | null, object_id: number | null, parent_id: number | null, key_id: number | null, date_created: string, date_modified: string, date_indexed: string, object: Object | null } | { type: "Object" } & { id: number, cas_id: string, integrity_checksum: string | null, name: string | null, extension: string | null, kind: number, size_in_bytes: string, key_id: number | null, hidden: boolean, favorite: boolean, important: boolean, has_thumbnail: boolean, has_thumbstrip: boolean, has_video_preview: boolean, ipfs_id: string | null, note: string | null, date_created: string, date_modified: string, date_indexed: string, file_paths: Array<FilePath> }

export interface FileDecryptorJobInit { location_id: number, object_id: number, output_path: string | null }

export interface FileEncryptorJobInit { location_id: number, object_id: number, key_uuid: string, algorithm: Algorithm, metadata: boolean, preview_media: boolean, output_path: string | null }

export interface FilePath { id: number, is_dir: boolean, location_id: number, materialized_path: string, name: string, extension: string | null, object_id: number | null, parent_id: number | null, key_id: number | null, date_created: string, date_modified: string, date_indexed: string }

export interface GenerateThumbsForLocationArgs { id: number, path: string }

export type HashingAlgorithm = { Argon2id: Params }

export interface IdentifyUniqueFilesArgs { id: number, path: string }

export interface IndexerRule { id: number, kind: number, name: string, parameters: Array<number>, date_created: string, date_modified: string }

export interface IndexerRuleCreateArgs { kind: RuleKind, name: string, parameters: Array<number> }

export interface InvalidateOperationEvent { key: string, arg: any }

export interface JobReport { id: string, name: string, data: Array<number> | null, metadata: any | null, date_created: string, date_modified: string, status: JobStatus, task_count: number, completed_task_count: number, message: string, seconds_elapsed: number }

export type JobStatus = "Queued" | "Running" | "Completed" | "Canceled" | "Failed" | "Paused"

export interface KeyAddArgs { algorithm: Algorithm, hashing_algorithm: HashingAlgorithm, key: string, library_sync: boolean }

export interface KeyNameUpdateArgs { uuid: string, name: string }

export interface LibraryArgs<T> { library_id: string, arg: T }

export interface LibraryConfig { version: string | null, name: string, description: string }

export interface LibraryConfigWrapped { uuid: string, config: LibraryConfig }

export interface Location { id: number, pub_id: Array<number>, node_id: number, name: string | null, local_path: string | null, total_capacity: number | null, available_capacity: number | null, filesystem: string | null, disk_type: number | null, is_removable: boolean | null, is_online: boolean, is_archived: boolean, date_created: string }

export interface LocationCreateArgs { path: string, indexer_rules_ids: Array<number> }

export interface LocationExplorerArgs { location_id: number, path: string, limit: number, cursor: string | null }

export interface LocationUpdateArgs { id: number, name: string | null, indexer_rules_ids: Array<number> }

export interface MasterPasswordChangeArgs { password: string, algorithm: Algorithm, hashing_algorithm: HashingAlgorithm }

export interface Node { id: number, pub_id: Array<number>, name: string, platform: number, version: string | null, last_seen: string, timezone: string | null, date_created: string }

export interface NodeConfig { version: string | null, id: string, name: string, p2p_port: number | null }

export interface NodeState { version: string | null, id: string, name: string, p2p_port: number | null, data_path: string }

export interface NormalisedCompositeId { $type: string, $id: any, org_id: string, user_id: string }

export interface NormalisedOrganisation { $type: string, $id: any, id: string, name: string, users: NormalizedVec<NormalisedUser>, owner: NormalisedUser, non_normalised_data: Array<null> }

export interface NormalisedUser { $type: string, $id: any, id: string, name: string }

export interface NormalizedVec<T> { $type: string, edges: Array<T> }

export interface Object { id: number, cas_id: string, integrity_checksum: string | null, name: string | null, extension: string | null, kind: number, size_in_bytes: string, key_id: number | null, hidden: boolean, favorite: boolean, important: boolean, has_thumbnail: boolean, has_thumbstrip: boolean, has_video_preview: boolean, ipfs_id: string | null, note: string | null, date_created: string, date_modified: string, date_indexed: string }

export interface ObjectValidatorArgs { id: number, path: string }

export interface OnboardingArgs { algorithm: Algorithm, hashing_algorithm: HashingAlgorithm }

export interface OnboardingKeys { master_password: string, secret_key: string }

export type Params = "Standard" | "Hardened" | "Paranoid"

export interface RestoreBackupArgs { password: string, secret_key: string, path: string }

export type RuleKind = "AcceptFilesByGlob" | "RejectFilesByGlob" | "AcceptIfChildrenDirectoriesArePresent" | "RejectIfChildrenDirectoriesArePresent"

export interface SetFavoriteArgs { id: number, favorite: boolean }

export interface SetMasterPasswordArgs { password: string, secret_key: string }

export interface SetNoteArgs { id: number, note: string | null }

export interface Statistics { id: number, date_captured: string, total_object_count: number, library_db_size: string, total_bytes_used: string, total_bytes_capacity: string, total_unique_bytes: string, total_bytes_free: string, preview_media_bytes: string }

export interface StoredKey { uuid: string, algorithm: Algorithm, hashing_algorithm: HashingAlgorithm, content_salt: Array<number>, master_key: Array<number>, master_key_nonce: Array<number>, key_nonce: Array<number>, key: Array<number>, memory_only: boolean }

export interface Tag { id: number, pub_id: Array<number>, name: string | null, color: string | null, total_objects: number | null, redundancy_goal: number | null, date_created: string, date_modified: string }

export interface TagAssignArgs { object_id: number, tag_id: number, unassign: boolean }

export interface TagCreateArgs { name: string, color: string }

export interface TagUpdateArgs { id: number, name: string | null, color: string | null }

export interface Volume { name: string, mount_point: string, total_capacity: bigint, available_capacity: bigint, is_removable: boolean, disk_type: string | null, file_system: string | null, is_root_filesystem: boolean }
