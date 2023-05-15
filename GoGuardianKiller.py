import os
from tabnanny import filename_only 

def remove_extension(filename):

    root, ext = os.path.splitext(filename)
    return root 

filename = "haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo"

for filename in filename_only: 
    new_filename = remove_extension(filename)
    print(new_filename)
