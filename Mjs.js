function write(filename,content){
var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath().toString()+'/Android/data/cn.nr19.mbrowser/files/'
var file=new java.io.File(path+filename)
if(!file.exists()) file.createNewFile()
var fileWritter = new java.io.FileWriter(path+filename,false);
fileWritter.write(content)
fileWritter.close()
}
function read(filename){
var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath().toString()+'/Android/data/cn.nr19.mbrowser/files/'
var file=new java.io.File(path+filename)
if (!file.getParentFile().exists())file.getParentFile().mkdirs();
if(!file.exists()) return [];
var filelength = file.length();
var filecontent = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE,filelength);
var fin = new java.io.FileInputStream(file);
fin.read(filecontent);
return new java.lang.String(filecontent)
}
function toast(message) {
  Packages.cn.mbrowser.config.App.h.b(message);
}
function back() {
  new Packages.android.app.Instrumentation().sendKeyDownUpSync(4);
}