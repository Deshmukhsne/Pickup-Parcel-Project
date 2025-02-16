<?php require_once __DIR__ . "/header.php" ?>
<div class="content container-fluid">
    <div class="page-header">
        <div class="row align-items-center">
            <div class="col">
                <h1 class="page-header-title"><?= translate('Add Package') ?></h1>
            </div>
        </div>
    </div>

    <form action="add_package.php"method="POST" class="row g-3" id="vmaster-form">
        <div class="col-12 col-md-6">
            <label for="" class="form-label"><?= translate('Distance (KM)') ?></label>
            <input type="number" name="distance" class="form-control form-control-sm" placeholder="<?= translate('Enter Distance') ?>">
        </div>
        <div class="col-12 col-md-6">
            <label for="" class="form-label"><?= translate('Time (Hours)') ?></label>
            <input type="text"  name="time"  class="form-control form-control-sm" placeholder="<?= translate('Enter Time') ?>">
        </div>
        
        <div class="modal-footer p-0 border-top-0">
            <button type="submit"  class="btn btn-sm btn-primary"><?= translate('Save') ?></button>
            <button type="button" class="btn btn-sm btn-secondary ms-2" data-bs-dismiss="modal"><?= translate('Reset') ?></button>
        </div>
    </form>
</div>

<?php require_once __DIR__ . "/footer.php" ?>
