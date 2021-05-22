# User manual 🎓

## Usage ❓

termscp can be started with the following options:

`termscp [options]... [protocol://user@address:port:wrkdir] [local-wrkdir]`

- `-P, --password <password>` if address is provided, password will be this argument
- `-q, --quiet` Disable logging
- `-v, --version` Print version info
- `-h, --help` Print help page

termscp can be started in two different mode, if no extra arguments is provided, termscp will show the authentication form, where the user will be able to provide the parameters required to connect to the remote peer.

Alternatively, the user can provide an address as argument to skip the authentication form and starting directly the connection to the remote server.

If address argument is provided you can also provide the start working directory for local host

### Address argument 🌎

The address argument has the following syntax:

```txt
[protocol://][username@]<address>[:port][:wrkdir]
```

Let's see some example of this particular syntax, since it's very comfortable and you'll probably going to use this instead of the other one...

- Connect using default protocol (*defined in configuration*) to 192.168.1.31, port if not provided is default for the selected protocol (in this case depends on your configuration); username is current user's name

    ```sh
    termscp 192.168.1.31
    ```

- Connect using default protocol (*defined in configuration*) to 192.168.1.31; username is `root`

    ```sh
    termscp root@192.168.1.31
    ```

- Connect using scp to 192.168.1.31, port is 4022; username is `omar`

    ```sh
    termscp scp://omar@192.168.1.31:4022
    ```

- Connect using scp to 192.168.1.31, port is 4022; username is `omar`. You will start in directory `/tmp`

    ```sh
    termscp scp://omar@192.168.1.31:4022:/tmp
    ```

#### How Password can be provided 🔐

You have probably noticed, that, when providing the address as argument, there's no way to provide the password.
Password can be basically provided through 3 ways when address argument is provided:

- `-P, --password` option: just use this CLI option providing the password. I strongly unrecommend this method, since it's very unsecure (since you might keep the password in the shell history)
- Via `sshpass`: you can provide password via `sshpass`, e.g. `sshpass -f ~/.ssh/topsecret.key termscp cvisintin@192.168.1.31`
- You will be prompted for it: if you don't use any of the previous methods, you will be prompted for the password, as happens with the more classics tools such as `scp`, `ssh`, etc.

---

## File explorer 📂

When we refer to file explorers in termscp, we refer to the panels you can see after establishing a connection with the remote.
These panels are basically 3 (yes, three actually):

- Local explorer panel: it is displayed on the left of your screen and shows the current directory entries for localhost
- Remote explorer panel: it is displayed on the right of your screen and shows the current directory entries for the remote host.
- Find results panel: depending on where you're searching for files (local/remote) it will replace the local or the explorer panel. This panel shows the entries matching the search query you performed.

In order to change panel you need to type `<LEFT>` to move the remote explorer panel and `<RIGHT>` to move back to the local explorer panel. Whenever you are in the find results panel, you need to press `<ESC>` to exit panel and go back to the previous panel.

### Keybindings ⌨

| Key           | Command                                               | Reminder    |
|---------------|-------------------------------------------------------|-------------|
| `<ESC>`       | Disconnect from remote; return to authentication page |             |
| `<TAB>`       | Switch between log tab and explorer                   |             |
| `<BACKSPACE>` | Go to previous directory in stack                     |             |
| `<RIGHT>`     | Move to remote explorer tab                           |             |
| `<LEFT>`      | Move to local explorer tab                            |             |
| `<UP>`        | Move up in selected list                              |             |
| `<DOWN>`      | Move down in selected list                            |             |
| `<PGUP>`      | Move up in selected list by 8 rows                    |             |
| `<PGDOWN>`    | Move down in selected list by 8 rows                  |             |
| `<ENTER>`     | Enter directory                                       |             |
| `<SPACE>`     | Upload / download selected file                       |             |
| `<A>`         | Toggle hidden files                                   | All         |
| `<B>`         | Sort files by                                         | Bubblesort? |
| `<C>`         | Copy file/directory                                   | Copy        |
| `<D>`         | Make directory                                        | Directory   |
| `<E>`         | Delete file (Same as `DEL`)                           | Erase       |
| `<F>`         | Search for files (wild match is supported)            | Find        |
| `<G>`         | Go to supplied path                                   | Go to       |
| `<H>`         | Show help                                             | Help        |
| `<I>`         | Show info about selected file or directory            | Info        |
| `<L>`         | Reload current directory's content / Clear selection  | List        |
| `<M>`         | Select a file                                         | Mark         |
| `<N>`         | Create new file with provided name                    | New         |
| `<O>`         | Edit file; see Text editor                            | Open        |
| `<Q>`         | Quit termscp                                          | Quit        |
| `<R>`         | Rename file                                           | Rename      |
| `<S>`         | Save file as...                                       | Save        |
| `<U>`         | Go to parent directory                                | Upper       |
| `<X>`         | Execute a command                                     | eXecute     |
| `<Y>`         | Toggle synchronized browsing                          | sYnc        |
| `<DEL>`       | Delete file                                           |             |
| `<CTRL+A>`    | Select all files                                      |             |
| `<CTRL+C>`    | Abort file transfer process                           |             |

### Work on multiple files 🥷

You can opt to work on multiple files, selecting them pressing `<M>`, in order to select the current file, or pressing `<CTRL+A>`, which will select all the files in the working directory.
Once a file is marked for selection, it will be displayed with a `*` on the left.
When working on selection, only selected file will be processed for actions, while the current highlighted item will be ignored.
It is possible to work on multiple files also when in the find result panel.
All the actions are available when working with multiple files, but be aware that some actions work in a slightly different way. Let's dive in:

- *Copy*: whenever you copy a file, you'll be prompted to insert the destination name. When working with multiple file, this name refers to the destination directory where all these files will be copied.
- *Rename*: same as copy, but will move files there.
- *Save as*: same as copy, but will write them there.

### Synchronized browsing ⏲️

When enabled, synchronized browsing, will allow you to synchronize the navigation between the two panels.
This means that whenever you'll change the working directory on one panel, the same action will be reproduced on the other panel. If you want to enable synchronized browsing just press `<Y>`; press twice to disable. While enabled, the synchronized browising state will be reported on the status bar on `ON`.

*Warning*: at the moment, whenever you try to access an unexisting directory, you won't be prompted to create it. This might change in a future update.

---

## Bookmarks ⭐

In termscp it is possible to save favourites hosts, which can be then loaded quickly from the main layout of termscp.
termscp will also save the last 16 hosts you connected to.
This feature allows you to load all the parameters required to connect to a certain remote, simply selecting the bookmark in the tab under the authentication form.

Bookmarks will be saved, if possible at:

- `$HOME/.config/termscp/` on Linux/BSD
- `$HOME/Library/Application Support/termscp` on MacOs
- `FOLDERID_RoamingAppData\termscp\` on Windows

For bookmarks only (this won't apply to recent hosts) it is also possible to save the password used to authenticate. The password is not saved by default and must be specified through the prompt when saving a new Bookmark.

> I was very undecided about storing passwords in termscp. The reason? Saving a password on your computer might give access to a hacker to any server you've registered. But I must admit by myself that for many machines typing the password everytime is really boring, also many times I have to work with machines in LAN, which wouldn't provide any advantage to an attacker, So I came out with a good compromise for passwords.

I warmly suggest you to follow these guidelines in order to decide whether you should or you shouldn't save passwords:

- **DON'T** save passwords for machines which are exposed on the internet, save passwords only for machines in LAN
- Make sure your machine is protected by attackers. If possible encrypt your disk and don't leave your PC unlocked while you're away.
- Preferably, save passwords only when a compromising of the target machine wouldn't be a problem.

In order to create a new bookmark, just follow these steps:

1. Type in the authentication form the parameters to connect to your remote server
2. Press `<CTRL+S>`
3. Type in the name you want to give to the bookmark
4. Choose whether to remind the password or not
5. Press `<ENTER>` to submit

whenever you want to use the previously saved connection, just press `<TAB>` to navigate to the bookmarks list and load the bookmark parameters into the form pressing `<ENTER>`.

![Bookmarks](https://github.com/veeso/termscp/blob/main/assets/images/bookmarks.gif?raw=true)

### Are my passwords Safe 😈

Well, kinda.
As said before, bookmarks are saved in your configuration directory along with passwords. Passwords are obviously not plain text, they are encrypted with **AES-128**. Does this make them safe? Well, depends on your operating system:

On Windows and MacOS the passwords are stored, if possible (but should be), in respectively the Windows Vault and the Keychain. This is actually super-safe and is directly managed by your operating system.

On Linux and BSD, on the other hand, the key used to encrypt your passwords is stored on your drive (at $HOME/.config/termscp). It is then, still possible to retrieve the key to decrypt passwords. Luckily, the location of the key guarantees your key can't be read by users different from yours, but yeah, I still wouldn't save the password for a server exposed on the internet 😉.
Actually [keyring-rs](https://github.com/hwchen/keyring-rs), supports Linux, but for different reasons I preferred not to make it available for this configuration. If you want to read more about my decision read [this issue](https://github.com/veeso/termscp/issues/2), while if you think this might have been implemented differently feel free to open an issue with your proposal.

---

## Configuration ⚙️

termscp supports some user defined parameters, which can be defined in the configuration.
Underhood termscp has a TOML file and some other directories where all the parameters will be saved, but don't worry, you won't touch any of these files manually, since I made possible to configure termscp from its user interface entirely.

termscp, like for bookmarks, just requires to have these paths accessible:

- `$HOME/.config/termscp/` on Linux/BSD
- `$HOME/Library/Application Support/termscp` on MacOs
- `FOLDERID_RoamingAppData\termscp\` on Windows

To access configuration, you just have to press `<CTRL+C>` from the home of termscp.

These parameters can be changed:

- **Text Editor**: the text editor to use. By default termscp will find the default editor for you; with this option you can force an editor to be used (e.g. `vim`). **Also GUI editors are supported**, unless they `nohup` from the parent process so if you ask: yes, you can use `notepad.exe`, and no: **Visual Studio Code doesn't work**.
- **Default Protocol**: the default protocol is the default value for the file transfer protocol to be used in termscp. This applies for the login page and for the address CLI argument.
- **Show Hidden Files**: select whether hidden files shall be displayed by default. You will be able to decide whether to show or not hidden files at runtime pressing `A` anyway.
- **Check for updates**: if set to `yes`, termscp will fetch the Github API to check if there is a new version of termscp available.
- **Group Dirs**: select whether directories should be groupped or not in file explorers. If `Display first` is selected, directories will be sorted using the configured method but displayed before files, viceversa if `Display last` is selected.
- **File formatter syntax**: syntax to display file info for each file in the explorer. See [File explorer format](#file-explorer-format)

### SSH Key Storage 🔐

Along with configuration, termscp provides also an **essential** feature for **SFTP/SCP clients**: the SSH key storage.

You can access the SSH key storage, from configuration moving to the `SSH Keys` tab, once there you can:

- **Add a new key**: just press `<CTRL+N>` and you will be prompted to create a new key. Provide the hostname/ip address and the username associated to the key and finally a text editor will open up: paste the **PRIVATE** ssh key into the text editor, save and quit.
- **Remove an existing key**: just press `<DEL>` or `<CTRL+E>` on the key you want to remove, to delete persistently the key from termscp.
- **Edit an existing key**: just press `<ENTER>` on the key you want to edit, to change the private key.

> Q: Wait, my private key is protected with password, can I use it?  
> A: Of course you can. The password provided for authentication in termscp, is valid both for username/password authentication and for RSA key authentication.

### File Explorer Format

It is possible through configuration to define a custom format for the file explorer. This is possible both for local and remote host, so you can have two different syntax in use. These fields, with name `File formatter syntax (local)` and `File formatter syntax (remote)` will define how the file entries will be displayed in the file explorer.
The syntax for the formatter is the following `{KEY1}... {KEY2:LENGTH}... {KEY3:LENGTH:EXTRA} {KEYn}...`.
Each key in bracket will be replaced with the related attribute, while everything outside brackets will be left unchanged.

- The key name is mandatory and must be one of the keys below
- The length describes the length reserved to display the field. Static attributes doesn't support this (GROUP, PEX, SIZE, USER)
- Extra is supported only by some parameters and is an additional options. See keys to check if extra is supported.

These are the keys supported by the formatter:

- `ATIME`: Last access time (with default syntax `%b %d %Y %H:%M`); Extra might be provided as the time syntax (e.g. `{ATIME:8:%H:%M}`)
- `CTIME`: Creation time (with syntax `%b %d %Y %H:%M`); Extra might be provided as the time syntax (e.g. `{CTIME:8:%H:%M}`)
- `GROUP`: Owner group
- `MTIME`: Last change time (with syntax `%b %d %Y %H:%M`); Extra might be provided as the time syntax (e.g. `{MTIME:8:%H:%M}`)
- `NAME`: File name (Elided if longer than 24)
- `PEX`: File permissions (UNIX format)
- `SIZE`: File size (omitted for directories)
- `SYMLINK`: Symlink (if any `-> {FILE_PATH}`)
- `USER`: Owner user

If left empty, the default formatter syntax will be used: `{NAME:24} {PEX} {USER} {SIZE} {MTIME:17:%b %d %Y %H:%M}`

---

## Text Editor ✏

termscp has, as you might have noticed, many features, one of these is the possibility to view and edit text file. It doesn't matter if the file is located on the local host or on the remote host, termscp provides the possibility to open a file in your favourite text editor.
In case the file is located on remote host, the file will be first downloaded into your temporary file directory and then, **only** if changes were made to the file, re-uploaded to the remote host. termscp checks if you made changes to the file verifying the last modification time of the file.

Just a reminder: **you can edit only textual file**; binary files are not supported.

### How do I configure the text editor 🦥

Text editor is automatically found using this [awesome crate](https://github.com/milkey-mouse/edit), if you want to change the text editor to use, change it in termscp configuration. [Read more](#configuration-️)

---

## Logging 🩺

termscp writes a log file for each session, which is written at

- `$HOME/.config/termscp/termscp.log` on Linux/BSD
- `$HOME/Library/Application Support/termscp/termscp.log` on MacOs
- `FOLDERID_RoamingAppData\termscp\termscp.log` on Windows

the log won't be rotated, but will just be truncated after each launch of termscp, so if you want to report an issue and you want to attach your log file, keep in mind to save the log file in a safe place before using termscp again.
The log file always reports in *trace* level, so it is kinda verbose.
I know you might have some questions regarding log files, so I made a kind of a Q/A:

> Is it possible to reduce verbosity?

No. The reason is quite simple: when an issue happens, you must be able to know what's causing it and the only way to do that, is to have the log file with the maximum verbosity level set.

> If trace level is set for logging, is the file going to reach a huge size?

Probably not, unless you never quit termscp, but I think that's likely to happne. A long session may produce up to 10MB of log files (I said a long session), but I think a normal session won't exceed 2MB.

> I don't want logging, can I turn it off?

Yes, you can. Just start termscp with `-q or --quiet` option. You can alias termscp to make it persistent. Remember that logging is used to diagnose issues, so since behind every open source project, there should always be this kind of mutual help, keeping log files might be your way to support the project 😉. I don't want you to feel guilty, but just to say.

> Is logging safe?

If you're concerned about security, the log file doesn't contain any plain password, so don't worry and exposes the same information the sibling file `bookmarks` reports.
